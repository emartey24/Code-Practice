let Tokyo = {
    country:"Japan",
    population:37115035,
    year: 1889
};

let Delhi = {
    country:"India",
    population:33807403,
    year: 1947
};

let Shanghai = {
    country:"China",
    population:29867918,
    year: 1949
};

let Dhaka = {
    country:"Bangladesh",
    population:23935652,
    year: 1610
};

let Sao = {
    country:"Brazil",
    population:22806704,
    year: 1544
};

let Cairo = {
    country:"Egypt",
    population:22623874,
    year: "969 ce"
};

let MexicoCity = {
    country:"Mexico",
    population:22505315,
    year: 1821
};
let mostPopulated = [Tokyo,Delhi,Shanghai,Dhaka,Sao,Cairo,MexicoCity];

// console.log(mostPopulated[4].country)
for (let i=0 ; i < mostPopulated.length; i++){
    if(mostPopulated[i].population>30000000){
    console.log(mostPopulated[i].country)
}
}







