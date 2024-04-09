 //1). Get the current temperature(F), UV index, wind speed, rain chance, and wind direction of Newark, NJ and store it within an object. Print the object to the terminal
// 2). Retrieve the temperature of Newark 4 hours from now and add it to the previously created object
// 3). Do the same for the following cities:
//  Los Angeles
// Miami
// Charlotte
// Houston
// Seattle
// 4). Add each city to an array
// 5). Print out the city that will be the warmest in 4 hours//



let Jersey = [
{
    "data": {
        "time": "2024-03-08T16:36:00Z",
        "values": {
            "cloudBase": 0.87,
            "cloudCeiling": 0.87,
            "cloudCover": 100,
            "dewPoint": 34.14,
            "freezingRainIntensity": 0,
            "humidity": 45,
            precipitationProbability: 0,
            "pressureSurfaceLevel": 30.24,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            temperature: 49.66,
            "temperatureApparent": 49.66,
            "uvHealthConcern": 1,
            uvIndex: 3,
            "visibility": 9.94,
            "weatherCode": 1001,
            windDirection: 43.19,
            "windGust": 5.31,
            windSpeed: 1.82
        },
    },
},
{   "location": {
        "lat": 40.73565673828125,
        "lon": -74.17236328125,
        "name": "Newark, Essex County, New Jersey, United States",
        "type": "administrative"
    },
},
]

for(let i = 0;i < Jersey.length; i++){
let NewarkWeather = {
    temperature: Jersey[0].data.values.temperature,
    uvIndex: Jersey[0].data.values.uvIndex,
    windSpeed: Jersey[0].data.values.windSpeed,
    rainChance: Jersey[0].data.values.precipitationProbability,
    windDirection: Jersey[0].data.values.windDirection
};
console.log(NewarkWeather);
}