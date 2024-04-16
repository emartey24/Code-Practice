// Retrieve All Data from Postman
fetch('http://localhost:3000/pokemon')
  .then((response) => response.json())
  .then((user) => {
     for(let i = 0; i < user.length; i++){
    
    
    // Contanier
    let pokedexContainer = document.getElementById("pokemonContainer");
    let pokedexCard = document.createElement("div");
    pokedexCard.classList.add("card");

    // Create a pokemon image element
    let pokemonImage = document.createElement("img");


    // Tags
    let pokemonNameTag = document.createElement("p");
    let pokemonTypeTag = document.createElement("P");
    let pokemonRegionTag = document.createElement("p");
    let pokemonHpTag = document.createElement("p");
    let pokemonAttackTag = document.createElement("p");
    let pokemonDefenseTag = document.createElement("p");
    let pokemonWeaknessTag = document.createElement("p");
    let pokemonStrikeTag = document.createElement("p");
  

    // Values
    pokemonNameTag.innerText = "Name: " + user[i].name;
    pokemonTypeTag.innerText = "Type: " + user[i].type;
    pokemonRegionTag.innerText = "Region: " + user[i].region;
    pokemonHpTag.innerText = "Hp: " + user[i].hp;
    pokemonAttackTag.innerText = "Attack: " + user[i].attack;
    pokemonDefenseTag.innerText = "Defense: " + user[i].defense;
    pokemonWeaknessTag.innerText = "Weakness: " + user[i].weakness;
    pokemonStrikeTag.innerText = "Strike: " + user[i].strike;
   
    


    // Link image to src
    pokemonImage.src = user[i].img

    // appenchild
    pokedexCard.appendChild(pokemonImage);
    pokedexCard.appendChild(pokemonNameTag);
    pokedexCard.appendChild(pokemonTypeTag);
    pokedexCard.appendChild(pokemonRegionTag);
    pokedexCard.appendChild(pokemonHpTag);
    pokedexCard.appendChild(pokemonAttackTag);
    pokedexCard.appendChild(pokemonDefenseTag);
    pokedexCard.appendChild(pokemonWeaknessTag);
    pokedexCard.appendChild(pokemonStrikeTag);


     // Appending container to the body
    pokedexContainer.appendChild(pokedexCard);

   }
    
  });



// fetch('http://localhost:3000/pokemon')
//     .then(resp => {
//         return resp.json();
//     })
//     .then(user => {
//         //Random Pokemon Generator
//         let pokemon1 = user[ Math.floor(Math.random() * user.length)];
//         let pokemon2 = user[ Math.floor(Math.random() * user.length)];
//     //Pokemon Image
//     let playerOneImage = document.getElementById('playerOneImage');
//     let playerTwoImage = document.getElementById('playerTwoImage');
//     let imgOne = document.createElement('img')
//     let imgTwo = document.createElement('img')
//     imgOne.src = pokemon1.img
//     imgTwo.src = pokemon2.img;
//     imgOne.style.height = "200px";
//     imgTwo.style.height = "200px";
//     playerOneImage.appendChild(imgOne);
//     playerTwoImage.appendChild(imgTwo);
//     //Pokemon name
//     let playerOneName = document.getElementById('playerOneName')
//     let playerTwoName = document.getElementById('playerTwoName')
//     playerOneName.innerHTML = pokemon1.name
//     playerTwoName.innerHTML = pokemon2.name
//     //Pokemon Type
//     let playerOneType = document.getElementById('playerOneType')
//     let playerTwoType = document.getElementById('playerTwoType')
//     playerOneType.innerHTML = `Type: ${pokemon1.type}`
//     playerTwoType.innerHTML = `Type: ${pokemon2.type}`
//     //Pokemon Region
//     let playerOneRegion = document.getElementById('playerOneRegion')
//     let playerTwoRegion = document.getElementById('playerTwoRegion')
//     playerOneRegion.innerHTML = `Region: ${pokemon1.region}`
//     playerTwoRegion.innerHTML = `Region: ${pokemon2.region}`
//     //Pokemon Hp
//     let playerOneHP = document.getElementById('playerOneHp')
//     let playerTwoHp = document.getElementById('playerTwoHp')
//     playerOneHP.innerHTML = `HP: ${pokemon1.hp}`
//     playerTwoHp.innerHTML = `HP: ${pokemon2.hp}`
//     //Pokemon Defence
//     let playerOneDefense = document.getElementById('playerOneDefence')
//     let playerTwoDefense = document.getElementById('playerTwoDefence')
//     playerOneDefense.innerHTML = `Defense: ${pokemon1.defense}`
//     playerTwoDefense.innerHTML = `Defense: ${pokemon2.defense}`
//     //Pokemon Attack
//     let playerOneAttack = document.getElementById('playerOneAttack')
//     let playerTwoAttack = document.getElementById('playerTwoAttack')
//     playerOneAttack.innerHTML = `Attack: ${pokemon1.attack}`
//     playerTwoAttack.innerHTML = `Attack: ${pokemon2.attack}`
//     //Pokemon Weakness
//     let playerOneWeakness = document.getElementById('playerOneWeakness')
//     let playerTwoWeakness = document.getElementById('playerTwoWeakness')
//     playerOneWeakness.innerHTML = `Weakness: ${pokemon1.weakness}`
//     playerTwoWeakness.innerHTML = `Weakness: ${pokemon2.weakness}`
//     //Pokemon move
//     let playerOneMove = document.getElementById('playerOneMove')
//     let playerTwoMove = document.getElementById('playerTwoMove')
//     playerOneMove.innerHTML = `Strike: ${pokemon1.strike}`
//     playerTwoMove.innerHTML = `Strike: ${pokemon2.strike}`
//     //Pokemon Special attack
//     let playerOneSpecial = document.getElementById('playerOneSpecial')
//     let playerTwoSpecial = document.getElementById('playerTwoSpecial')
//     playerOneSpecial.innerHTML = `Special: ${pokemon1.special}`
//     playerTwoSpecial.innerHTML = `Special: ${pokemon2.special}`
//     });