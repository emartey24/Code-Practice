//@channel Using javascript's random number generator, create function that replicates two dice rolls with possible values between 1-6 for each die. Two users will each get one throw per turn. Whoever rolls the higher number wins. For example, if user 1 rolls an 11 and user 2 rolls a 9 then print user 1 wins.  The function should accept each die value as a parameter so the function should be diceRoll(die1, die2) (edited) 

let User1roll1 = Math.ceil(Math.random() * 6) 
console.log(User1roll1);
let user1roll2 = Math.ceil(Math.random() *6) 
console.log(user1roll2);
let User2roll1 = Math.ceil(Math.random() *6) 
console.log(User2roll1)
let User2roll2 = Math.ceil(Math.random() *6) 
console.log(User2roll2)

let totaluser1 = User1roll1 + user1roll2 
console.log(totaluser1);
let totaluser2 = User2roll1 + User2roll2 
console.log(totaluser2);

function diceRoll(User1,User2){
    if(User1>User2){
        console.log("User1 wins");
    }else if (User1<User2){
        console.log("User2 wins");
    }else 
        console.log("Tie")
    }

diceRoll(totaluser1,totaluser2)












 



