const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
const pg = require("pg-promise")();
const db = pg("postgres://postgres@localhost:5432/postgres");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json

const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

let clientID = 0;

function clientError(req, message, errorCode) {
  logger.log({
    level: "info",
    endpoint: req.path,
    method: req.method,
    query_parameters: req.query,
    path_parameters: req.params,
    body: req.body,
    ip: req.ip,
    errorCode: errorCode,
    message: message,
    timestamp: new Date(),
  });
}

/*
Middleware:
    Creates a log for every API call
*/
app.all("/*", (req, res, next) => {
  clientID++;
  logger.log({
    level: "info",
    endpoint: req.path,
    method: req.method,
    query_parameters: req.query,
    path_parameters: req.params,
    body: req.body,
    ip: req.ip,
    timestamp: new Date(),
  });
  next();
});

// GET requests should NEVER have a body
// returns entire pokemon list or a single one
app.get("/pokemon", async function (req, res) {
  // Check for unexpected body
  if (Object.keys(req.body).length !== 0) {
    return res.status(400).json({ error: "Request body is not permitted" });
  }
  // Check if there are unexpected query parameters
  if (Object.keys(req.query).length > 1) {
    clientError(req, "Query parameters do not meet requirements", 400);
    // checks if there is more than one query parameter entered
    res.status(400).json({
      error: "Query parameters do not meet requirements",
    });
  } else {
    // Validate 'id' if it exists
    if (isNaN(req.query.id) && req.query.id != undefined) {
      clientError(req, "ID is NaN", 400);
      // checks to make sure that the id is a number
      res.status(400).json({
        error: "ID is NaN",
      });
    }
    if (req.query.name === undefined) {
      try {
        res.json(await db.any("select * from pokemon"));
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    } else {
      let pokename = req.query.name;
      res.json(
        await db.oneOrNone("select * from pokemon where name = $1", pokename)
      );
    }
  }
});

// DELETE
// deletes single task by targeting ID
app.delete("/pokemon/:id", async function (req, res) {
  console.log(req.params.id);
  if (isNaN(req.params.id)) {
    // checks if the parameter entered is a number
    res.status(400).json({
      error: "Parameters do not meet requirements",
    });
  } else {
    let id = Number(req.params.id);
    let del = await db.result("DELETE FROM pokemon WHERE id = $1", id);
    console.log(del.rowCount);
    if (del.rowCount > 0) {
      res.status(200).send(` Pokemon deleted with ID: ${id}`);
    } else res.status(400).send("Pokemon does not exist");
  }
});

// PUT
// updates a single fields to pokemon
app.put("/pokemon/:id", async function (req, res) {
  if (isNaN(req.params.id)) {
    clientError(req, "Parameters do not meet requirements", 400);
    // checks if the path parameter is not a number
    res.status(400).json({
      error: "Parameters do not meet requirements",
    });
    return;
  }
  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(req.body)) {
    // checks if any special characters were used
    clientError(req, "Body does not meet requirements", 400);
    return res.status(400).json({ msg: "Body does not meet requirements" });
  } else if (typeof req.body !== "string" && req.body !== undefined) {
    // checks if a todo is a string and if todo is undefined
    clientError(req, "Body does not meet requirements", 400);
    res.status(400).json({
      error: "Body does not meet requirements",
    });
    return;
  }
  let { name, type, region, hp, attack, defense, weakness } = req.body;
  let id = parseInt(req.params.id);
  await db.none(
    "UPDATE pokemon SET name=$1, type=$2, region=$3, hp=$4, attack=$5, defense=$6, weakness=$7 WHERE id=$8",
    [
      name,
      type,
      region,
      parseInt(hp),
      parseInt(attack),
      parseInt(defense),
      weakness,
      id,
    ]
  );
  res.json("successful update");
});

// POST
// adds fields to Pokemon
app.post("/pokemon", async function (req, res) {
  let { name, type, region, hp, attack, defense, weakness } = req.body;
  console.log(req.body);
  await db.none(
    "INSERT INTO pokemon (name, type, region, hp, attack, defense, weakness) VALUES ($1,$2,$3,$4,$5,$6,$7)",
    [name, type, region, hp, attack, defense, weakness]
  );
  if (Object.keys(req.body).length > 0) {
    res.status(200).json({ msg: "Pokemon added" });
  }
});
