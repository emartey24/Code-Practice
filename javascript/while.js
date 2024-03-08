// let bool = [true,false,false,true,true,true,false];

// let i = 0;
// while(i < bool.length) {
//     if(bool[i] === true){
//     console.log(i);
//     }
//     i++
// }



let userAccounts = [
    {
    
    name: "John Doe",
    birthday: "05/24/1974",
    email: "john@email.com"
},{
    name: "Ashley Jones",
    birthday: "07/09/1986",
    email: "ashley@email.com"
},{
    name: "Mike Brown",
    birthday: "11/12/2004",
    email: "mike@email.com"
},{
    name: "Jake Smith",
    birthday: "12/03/1999",
    email: "jake@email.com"

},
]

// function getBirthdates(users) {
//     let i=0;
//     while(i <users.length) {
//         console.log (users[i].birthday)
//         i++;
//     }
// }

// getBirthdates(userAccounts);

function getBirthdates(users){
    let i=0;
    while(i< users.length){
        let d = new Date(users[i].birthday);
        
        let month = d.getMonth()+1;
        let day = d.getDate();
        let year = d.getFullYear();
        let date = month + "/" + day + "/" + year;
        console.log(date);
        if(year <= 1989 ) {
        console.log(users[i].name + "Eligible to be President");
        }else{
            console.log(users[i].name + "Not Eligible");
        };
        
        users[i].id = 1000000+ Math.ceil(Math.random() * 9000000);
        console.log(users);
        i++
    }
}


getBirthdates(userAccounts)









