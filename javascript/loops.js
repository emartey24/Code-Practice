// Part I: Print out every team that has an attendance over 30000.
// Part II: Print the list of teams in alphabetical order by name
let teams = [
    {
      name: "Braves",
      city: "Atlanta", // Not really in Atlanta
      state: "GA",
      avgAttendance: 39401,
    },
    {
      name: "Reds",
      city: "Cincinatti",
      state: "OH",
      avgAttendance: 25164,
    },
    {
      name: "Yankees",
      city: "New York City",
      state: "NY",
      avgAttendance: 40862,
    },
    {
      name: "Red Sox",
      city: "Boston",
      state: "MA",
      avgAttendance: 32989,
    },
  ];


//   for (let index= 0 ;index < teams.length;index++ ) {
//     if (teams[index].avgAttendance>30000)
//     console.log(teams[index].name)
//   }


for (let i = 0; i < teams.length - 1; i++) {
  console.log("Current team: ", teams[i].name);
  console.log("Next team: ", teams[i + 1].name);


  }





  
    


   

  

  
  
  
  
  
  
  
  
  
  
  