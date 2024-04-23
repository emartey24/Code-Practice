// // Retrieve All Data from Postman
// fetch('http://localhost:3000/pokemon')
//   .then((response) => response.json())
//   .then((user) => {
//      for(let i = 0; i < user.length; i++){
    
    
//     // Contanier
//     let pokedexContainer = document.getElementById("pokemonContainer");
//     let pokedexCard = document.createElement("div");
//     pokedexCard.classList.add("card");

//     // Create a pokemon image element
//     let pokemonImage = document.createElement("img");


//     // Tags
//     let pokemonNameTag = document.createElement("p");
//     let pokemonTypeTag = document.createElement("P");
//     let pokemonRegionTag = document.createElement("p");
//     let pokemonHpTag = document.createElement("p");
//     let pokemonAttackTag = document.createElement("p");
//     let pokemonDefenseTag = document.createElement("p");
//     let pokemonWeaknessTag = document.createElement("p");
//     let pokemonStrikeTag = document.createElement("p");
  

//     // Values
//     pokemonNameTag.innerText = "Name: " + user[i].name;
//     pokemonTypeTag.innerText = "Type: " + user[i].type;
//     pokemonRegionTag.innerText = "Region: " + user[i].region;
//     pokemonHpTag.innerText = "Hp: " + user[i].hp;
//     pokemonAttackTag.innerText = "Attack: " + user[i].attack;
//     pokemonDefenseTag.innerText = "Defense: " + user[i].defense;
//     pokemonWeaknessTag.innerText = "Weakness: " + user[i].weakness;
//     pokemonStrikeTag.innerText = "Strike: " + user[i].strike;
   
    


//     // Link image to src
//     pokemonImage.src = user[i].img

//     // appenchild
//     pokedexCard.appendChild(pokemonImage);
//     pokedexCard.appendChild(pokemonNameTag);
//     pokedexCard.appendChild(pokemonTypeTag);
//     pokedexCard.appendChild(pokemonRegionTag);
//     pokedexCard.appendChild(pokemonHpTag);
//     pokedexCard.appendChild(pokemonAttackTag);
//     pokedexCard.appendChild(pokemonDefenseTag);
//     pokedexCard.appendChild(pokemonWeaknessTag);
//     pokedexCard.appendChild(pokemonStrikeTag);


//      // Appending container to the body
//     pokedexContainer.appendChild(pokedexCard);

//    }
    
//   });

function battle(){
    fetch('http://localhost:3000/pokemon/')
    .then(resp => {
        return resp.json();
    })
    .then(user => {
        //Random Pokemon Generator
        let pokemon1 = user[ Math.floor(Math.random() * user.length)];
        let pokemon2 = user[ Math.floor(Math.random() * user.length)];

    //Pokemon Image
    let playerOneImage = document.getElementById('playerOneImage');
    let playerTwoImage = document.getElementById('playerTwoImage');
    let imgOne = document.createElement('img')
    let imgTwo = document.createElement('img')
    imgOne.src = pokemon1.img
    imgTwo.src = pokemon2.img;
    imgOne.style.height = "200px";
    imgTwo.style.height = "200px";
    imgOne.style.border = "15px solid gold"
    imgTwo.style.border= "15px solid gold"
    playerOneImage.appendChild(imgOne);
    playerTwoImage.appendChild(imgTwo);

    //Pokemon name
    let playerOneName = document.getElementById('playerOneName')
    let playerTwoName = document.getElementById('playerTwoName')
    playerOneName.innerText = pokemon1.name 
    playerTwoName.innerText = pokemon2.name

    //Pokemon Type
    let playerOneType = document.getElementById('playerOneType')
    let playerTwoType = document.getElementById('playerTwoType')
    playerOneType.innerText = `Type: ${pokemon1.type}`
    playerTwoType.innerText = `Type: ${pokemon2.type}`

    //Pokemon Region
    let playerOneRegion = document.getElementById('playerOneRegion')
    let playerTwoRegion = document.getElementById('playerTwoRegion')
    playerOneRegion.innerText = `Region: ${pokemon1.region}`
    playerTwoRegion.innerText = `Region: ${pokemon2.region}`

    //Pokemon Hp
    let playerOneHP = document.getElementById('playerOneHp')
    let playerTwoHp = document.getElementById('playerTwoHp')
    playerOneHP.innerText = `HP: ${pokemon1.hp}`
    playerTwoHp.innerText = `HP: ${pokemon2.hp}`

    //Pokemon Defense
    let playerOneDefense = document.getElementById('playerOneDefense')
    let playerTwoDefense = document.getElementById('playerTwoDefense')
    playerOneDefense.innerText = `Defense: ${pokemon1.defense}`
    playerTwoDefense.innerText = `Defense: ${pokemon2.defense}`

    //Pokemon Attack
    let playerOneAttack = document.getElementById('playerOneAttack')
    let playerTwoAttack = document.getElementById('playerTwoAttack')
    playerOneAttack.innerText = `Attack: ${pokemon1.attack}`
    playerTwoAttack.innerText = `Attack: ${pokemon2.attack}`

    //Pokemon Weakness
    let playerOneWeakness = document.getElementById('playerOneWeakness')
    let playerTwoWeakness = document.getElementById('playerTwoWeakness')
    playerOneWeakness.innerText = `Weakness: ${pokemon1.weakness}`
    playerTwoWeakness.innerText = `Weakness: ${pokemon2.weakness}`


   
    let playerOnecontainer = document.getElementById("playerOne")
    playerOnecontainer.style.border = "15px solid gold"
    playerOnecontainer.style.borderRadius= "5%;"
    playerOnecontainer.style.marginLeft = "10%"
    playerOnecontainer.style.padding = "5%"
    playerOnecontainer.style.width = "100%"
    playerOnecontainer.style.fontFamily = "'Times New Roman', Times, serif"
    playerOnecontainer.style.backgroundImage = "url('./Images/firebackground.png')";
   

    let playerTwocontainer = document.getElementById("playerTwo")
    playerTwocontainer.style.border = "15px solid gold"
    playerTwocontainer.style.borderRadius= "5%;"
    playerTwocontainer.style.marginRight = "10%"
    playerTwocontainer.style.padding = "5%"
    playerTwocontainer.style.width = "100%"
    playerTwocontainer.style.fontFamily = "'Times New Roman', Times, serif"
    playerTwocontainer.style.backgroundImage = "url('./Images/icebackground.png')";



    document.getElementById('pokeball').style.pointerEvents = 'none';
    document.getElementById('pokeball').style.opacity = '0.5';
    document.getElementById('pokeball').style.left = '30%';

// }



 //Attack Box Container

 let attackBoxContainer = document.getElementById('attackBoxContainer')
//  let attackBoxCard = document.createElement("div");

//  Attacks
 let attackOne = document.getElementById('attack1')
 let attackTwo = document.getElementById('attack2')
 let attackThree = document.getElementById('attack3')
 let attackFour = document.getElementById('attack4')
 attackOne.innerText = `STRIKE 1: ${pokemon1.strike}`
 attackTwo.innerText = `STRIKE 2: ${pokemon1.strike}`
 attackThree.innerText = `STRIKE 3: ${pokemon1.strike}`
 attackFour.innerText = `STRIKE 4: ${pokemon1.strike}`;




 let strikeOne = document.getElementById('strike1')
 let strikeTwo = document.getElementById('strike2')
 let strikeThree = document.getElementById('strike3')
 let strikeFour = document.getElementById('strike4')
 strikeOne.innerText = `STRIKE 1: ${ pokemon2.strike}`
 strikeTwo.innerText = `STRIKE 2: ${pokemon2.strike}`
 strikeThree.innerText = `STRIKE 3: ${pokemon2.strike}`
 strikeFour.innerText = `STRIKE 4: ${pokemon2.strike}`;


 //append attack box card to container

 attackBoxContainer.appendChild(pokemon1.attackOne);
 attackBoxContainer.appendChild(pokemon1.attackTwo);
 attackBoxContainer.appendChild(pokemon1.attackThree);
 attackBoxContainer.appendChild(pokemon1.attackFour);

//  attackBoxContainer.appendChild(attackBoxCard);


});

}


function strikeOne(){
    fetch('http://localhost:3000/pokemon/attack')
    .then(resp => {
        return resp.json();
    })
    .then(user => {
        console.log(user);
});
}