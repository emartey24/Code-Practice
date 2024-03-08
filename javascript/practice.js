// This prints out full name
let fullname = "Emmanuel  Martey";
fullname = "City of Refuge";

console.log(fullname)

// This list everything in user and single item
let user = {
    email: "help@gmail.com",
    password: "passsword 123",
    address: "123 apple st",
    city: "Atlanta"

}
console.log(user);
console.log(user.address);
console.log(user.email);
console.log(user.password);

// List the age and add 1

let age = 45;
age = age + 1;

console.log(age);

// Concatentation to Print name together
let firtsName = "Emmanuel"
let lastName = "Martey"

completeName = firtsName + " " + lastName;
console.log(completeName);


// Organize all Southeastern conference schools by division

// City, State, student population, year founded

let UGA = {
    city: "Athens",
    state: "GA",
    population: 40118,
    founded: 1785
};

// To access properties inside of an object we use dot notation
console.log(UGA.founded);

let UF = {
    city: "Gainesville",
    state: "FL",
    population: 60795,
    founded: 1853
};

let UK = {
    city: "Lexington",
    state: "KY",
    population: 30473,
    founded: 1865
};

let TN = {
    city: "Knoxville",
    state: "TN",
    population: 28321,
    founded: 1794
};

let USC = {
    city: "Columbia",
    state: "SC",
    population: 34731,
    founded: 1801
};

let secEast = [UGA,UF,UK,TN];

// This list the city for UK
console.log(secEast[2].city); 

// This list the everything got TN
console.log(secEast[3]);

// This list entire list
console.log(secEast);

// This is to add new array to pre exiisting one. So that it can be printed out
secEast.push(USC);
console.log(secEast);



/* Conditionals: runs blocks of code depending on the condition 
    is true or false */


// Prints out that temperature is warm
let temperature = 85;
if(temperature => 75) {
    console.log(`It's warm`);
}

//  ! means NOT.  This prints out both statement.
if(temperature !=72) {
    console.log("Today is not a perfect day");
    console.log("Wait for another day to go outside");
}


// Single = is used for assignment, meaning we are assigning a
// value to a variable
let isSaturday = false;
if(isSaturday = true) {
    console.log("It's the weekend!")
}


// When trying to determine if two values are equal to each other /THIS DOESN'T WORK.
// use ==
let day = "Tuesday";
if(day == "Monday") {
    console.log("It's the worst day of the week");
}

// === also determines if values are equivalent, but also checks if
// the type is equivalent
// 733 doesn't equal 50 so nothing will print.
let score = 733;
// Checks both the value and datatype 
if(score === "50") {
    console.log("That's a great score");
}



// else can be used as a catch all when none of the conditions are met
let price = 50000;
if (price < 30000) {
    console.log("Buy car");
// Use the &&(AND) to evaluate more than one condition in
    // a single statement  
}else if(price >= 30000 && price < 51000) {
    console.log("Think about finance");
}else {
    console.log("Its Expensive");
}




/* 
Functions are snippets of code that are run when called
*/
//Any variables declared outside of a function or code block has a
// global scope and can be called by any code block within the file




// Generate a random number between 0-100
let randomNumber = Math.ceil(Math.random() * 100); 
console.log(randomNumber);

// Variables declared within a function are scoped locally, meaning
// other functions do not have access to that variable

function generateWindWarning() {
    let averageWindspeed = (7+ 12 + 15)/3
    console.log(averageWindspeed);
    if(averageWindspeed < 0) {
        console.log("Illegal value provided");
    } else if(averageWindspeed < 5) {
        console.log("slightly windy");
    } else if(averageWindspeed >= 5 && averageWindspeed < 15) {
        console.log("Moderate winds, grab a jacket");
    } else if(averageWindspeed >= 15 && averageWindspeed < 25) {
        console.log("conditions are hazardous");
    } else if (averageWindspeed >= 25) {
        console.log("wind advisory warning");
    }
}

// Calls for the average.
 generateWindWarning() 


//  Dicegame
function dieRoll() {
    let die1 = Math.ceil(Math.random() * 6);
    let die2 = Math.ceil(Math.random() * 6);
    return die1 + die2;
}
function diceGame() {
    let user1 = dieRoll();
    let user2 = dieRoll();
    // String Formatting, %d this is a placeholder for a number
  //                    \n indicates a new line
  console.log("User 1: %d\nUser2: %d", user1, user2);

  if (user1 > user2) {
    console.log("User 1 wins");
  } else if (user2 > user1) {
    console.log("User 2 wins");
  } else {
    console.log("It's a tie");
  }
}

diceGame();

    










