//We can obtain information from the client through multiple avenues

/* 1). Query Parameters(?): the client is asking for specific from your server
                            query parameters are almost always exclusive to GET
                            endpoints

   2). Path Parameters(:):  the client is making a change to specific resource within
                            the database. Generally used with POST/PUT/DELETE endpoints

   3). Body:                the client provides the information to change or create an
                            an existing resource within the database

Both query and path parameters can be accessed in javascript using the req(request)
object. i.e req.params
*/

//Imports express from the node_modules folder
const express = require("express");
const app = express();
const winston = require("winston");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

const bodyParser = require("body-parser") // for parsing application/json
app.use(bodyParser.json())

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

let todos = [];
let number_of_todos = 1;
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
    })
}

/*
Middleware:
    Creates a log for every API call
*/
app.all('/*', (req, res, next) => {
    clientID++;
    logger.log({
        level: "info",
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_parameters: req.params,
        body: req.body,
        ip: req.ip,
        // errorCode: 400,
        timestamp: new Date(),
    });
    next();
})

// GET requests should NEVER have a body




/*
Endpoint: 
    GET: returns a list of all todos; if an id is provided, only a single todo is returned
Query Parameters:
    id[number]: assigned number of the to do item
*/


// returns entire to do list or a single one
app.get('/todo', function (req, res) {
    console.log(req.query.id);
    console.log(Object.keys(req.query))
    // console.log(Number(req.query.id));
    // console.log(typeof(Number(req.query.id)));

    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        // check if a body was provided in the request
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } else if(Object.keys(req.query).length > 1) {
        clientError(req, "Query parameters do not meet requirements", 400);
        // checks if there is more than one query parameter entered
        res.status(400).json({
            error: "Query parameters do not meet requirements"
        });
    } else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id" && Object.keys(req.query)[0] != "list")) {
        clientError(req, "Query parameters do not meet requirements", 400);
        // checks if parameters other than id or list are passed
        res.status(400).json({
            error: "Query parameters do not meet requirements"
        });
    } else if(isNaN(req.query.id) && req.query.id != undefined) {
        clientError(req, "ID is NaN", 400);
        // checks to make sure that the id is a number
        res.status(400).json({
            error: "ID is NaN"
        });
    }
    // else if(isNaN(Number(req.query.id))){
    //     console.log('id', req.query.id);
    //     console.log('NAN triggered')
    //     // checks if the query parameter entered is a number
    //     res.status(400).json({
    //         error: "Query parameters do not meet requirements"
    //     });
    else {
        // else is the success case
        if(req.query.id == undefined) {
            // check if an id was passed or not from the client
            // if not, return all todos
            res.json({todos})
        } else {
            let clientTask = {};
            // or can set "let clientTask" so that it comes out as undefined 
            for(let i=0; i < todos.length; i++) {
                if(todos[i].id == req.query.id) {
                    clientTask = todos[i];
                }
            }
            // console.log(Object.keys(clientTask))
            if(Object.keys(clientTask).length === 0) {
                // match not found, return error
                res.status(400).json({
                    error: "'To Do' with that id not found"
                })
            } else {
                // send back matching result of todos[i]
                res.json(clientTask);
            }
        }
    }
})


/*
Endpoint: 
    POST: adds tasks (to do list item) to the to do list. If a list parameter is provided, it adds multiple to dos in one call
Body:
    todo[string](required): the task to be added to the todolist
    list[array]: contains several todos
*/

// POST
// adds tasks to the to do list
app.post('/todo', function(req, res){
    console.log(typeof(req.body.list[0].todo));
    console.log(Object.keys(req.body).length > 0);
    const regex = /^[a-zA-Z0-9]+$/;
    // checks if any query parameters were entered
    if(Object.keys(req.query).length > 0) {
        clientError(req, "Query parameters prohibited", 400);
        res.status(400).json({
            error: "Query parameters prohibited"
        });
    } 
    else if (req.body.list.every((item) => regex.test(item.todo))) {
        if(req.body.list == undefined) {
            // add a single todo
            let listItem = {
                id : number_of_todos++,
                todo : req.body.todo,
                completed : false,
            }
            todos.push(listItem);
            res.json({todo: todos[todos.length - 1]});
        } else if (req.body.list.length > 0) {
            console.log("bulk insert in progress")
            for(let i = 0; i < req.body.list.length; i++) {
                // checks if any to do items are not strings
                if(typeof((req.body.list[i].todo)) != 'string') {
                    clientError(req, "Body does not meet requirements", 400);
                    res.status(400).json({
                        error: "Body does not meet requirements"
                    })
                } else {
                    console.log(req.body.list[i].todo);
                    // if everything checks out, it creates the list
                    let listItem = {
                        id : number_of_todos++,
                        todo : req.body.list[i].todo,
                        completed : false,
                    }
                    todos.push(listItem);
                }
                
            }
            res.json(todos);
        }
    } else{
        // returns an error message if special characters are used
        clientError(req, "Body does not meet requirements", 400);
        return res.status(400).json({ msg: "Body does not meet requirements" });
    }
})


/*
Endpoint: 
    PUT: updates an existing todo and modifies its data
Path Parameter:
    id[number](required): the id of the task to be updated to the todolist
Body:
    todo[string]:the task to be updated
    completed[boolean]: status of the tasks
*/

// PUT
// updates a single task in the to do list
app.put('/todo/:id', (req, res) => {
    
    if (isNaN(req.params.id)) {
        clientError(req, "Parameters do not meet requirements", 400);
        // checks if the path parameter is not a number
        res.status(400).json({
            error: "Parameters do not meet requirements"
        });
        return;
    }
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(req.body.todo)) {
        // checks if any special characters were used
        clientError(req, "Body does not meet requirements", 400);
        return res.status(400).json({ msg: "Body does not meet requirements" });
    } else if (typeof req.body.todo !== 'string' && req.body.todo !== undefined) {
        // checks if a todo is a string and if todo is undefined
        clientError(req, "Body does not meet requirements", 400);
        res.status(400).json({
            error: "Body does not meet requirements"
        });
        return;
    } else if (typeof req.body.completed !== 'boolean' && req.body.completed !== undefined) {
        // checks if completed item is a boolean and if completed item is undefined
        clientError(req, "Body does not meet requirements", 400);
        res.status(400).json({
            error: "Body does not meet requirements"
        });
        return; 
    }

    let found = false;
    for (let i = 0; i < todos.length; i++) {
        // updates changes made to todo or completed items
        if (todos[i].id == req.params.id) {
            found = true;
            if (req.body.todo !== undefined) {
                todos[i].todo = req.body.todo;
            }
            if (req.body.completed !== undefined) {
                todos[i].completed = req.body.completed;
            }
            res.json(todos[i]);
            break;
        }
    }
});


/*
Endpoint: 
    PUT: deletes an existing todo
Path Parameter:
    id[number](required): the id of the task to be deleted from the todolist
*/

// DELETE
// deletes single task from the to do list
app.delete('/todo/:id', (req, res) => {
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        // check if a body was provided in the request
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } else if(Object.keys(req.query).length > 0) {
        clientError(req, "Parameters do not meet requirements", 400);
        // checks if there is any query parameter entered
        res.status(400).json({
            error: "Parameters do not meet requirements"
        });
    } else if(isNaN(req.params.id)) {
        clientError(req, "Parameters do not meet requirements", 400)
        // checks if the parameter entered is a number
        res.status(400).json({
            error: "Parameters do not meet requirements"
        });
    } else {
        let temp; 
        // checks if id# passed is within the available id#s
        if(req.params.id >= 0 && req.params.id <= todos.length) {
            // if yes, delete the specified todo list item with the matching id
            for(let i = 0; i < todos.length; i++) {
                if(todos[i].id == req.params.id) {
                    temp = todos[i];
                    todos.splice(i, 1)
                }
            }
            res.json({temp});
        } else {
            // if id# is not an available id, return an error message
            clientError(req, "Parameters do not meet requirements", 400)
            res.status(400).json({
                error: "Parameters do not meet requirements"
            });
        }
    }
    // if(Object.keys(req.body).length != 0) {
    //     res.status(400).json({
    //         error: "Request body is not permitted"
    //     });
    // } else if(isNaN(req.params.id)) {
    //     res.status(400).json({
    //         message: "client error"
    //     });
    // } else if(req.params.id >= 0 && req.params.id <= todos.length) {
    //     console.log("ID from Client: ", req.params.id)
    //     let deleteIndex = req.params.id - 1;
    //     let tempValue = todos[deleteIndex];
    //     todos.splice(deleteIndex, 1);
    //     res.json({todo: tempValue});
    // } else {
    //     res.status(404).json({
    //         message: "client error"
    //     });
    // }
})


// opens a port on your computer for the server to listen to incoming requests
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})