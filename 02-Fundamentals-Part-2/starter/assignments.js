//      FUNCTIONS
/*
function describeCountry(country, population, capitalCity){
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}

console.log(describeCountry('United States', 328, 'Washington D.C'));
const ecuador = describeCountry('Ecuador', 16, 'Quito');
console.log(ecuador);
const argentina = describeCountry('Argentina', 45, 'Buenos Aires');
console.log(argentina);

//      FUNCTION DECLARATIONS VS EXPRESSION

// Function declaration
function percentageOfWorld(population){
    return population/7900*100;
}

const population1 = percentageOfWorld(800);
const population2 = percentageOfWorld(1200);
const population3 = percentageOfWorld(400);

console.log(population1, population2, population3);

// Function expression
const percentageOfWorld2 = function(population){
    return population/7900*100;
}
const population1a = percentageOfWorld2(800);
const population2a = percentageOfWorld2(1200);
const population3a = percentageOfWorld2(400);

console.log(population1a, population2a, population3a);

//      ARROW FUNCTIONS

const percentageOfWorld3 = population  => population/7900*100;

const population1 = percentageOfWorld3(800);
const population2 = percentageOfWorld3(1200);
const population3 = percentageOfWorld3(400);

console.log(population1, population2, population3);

//      FUNCTION CALLING OTHER FUNCTIONS

function describePopulation(country, population){
    const percentage = percentageOfWorld(population);
    return `${country} has ${population} million people, which is about ${percentage}%`
}
function percentageOfWorld(population){
    return population/7900*100;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Ecuador', 16));
console.log(describePopulation('Argentina', 45));

// making the function with an arrow expression
const descrpiption = (country, population) => {const percentage = percentageOfWorld(population);
return `${country} has ${population} million people, which is about ${percentage}%`}

//      INTRODUCTION TO ARRAYS

const populations = [16, 45, 1441, 30]; 
console.log(populations.length === 4);

const prcntgs = population  => population/7900*100;

const percentages = [prcntgs(populations[0]), prcntgs(populations[1]), prcntgs(populations[2]), prcntgs(populations[3])];
console.log(percentages);

//      BASIC ARRAY OPERATIONS (METHODS)

const neighbours = ['Ecuador', 'Peru', 'Brazil', 'Venezuela', 
'Panama'];

neighbours.push('Utopia');
neighbours.pop();

if(!neighbours.includes('Germany'||'germany')){
    console.log(`Probably not a central European country`)
}

neighbours[neighbours.indexOf('Ecuador')]='Republica del Ecuador mi ñaño';

console.log(neighbours);

//      INTRODUCTION TO OBJECTS

const myCountry = {
    country: 'Ecuador',
    capital: 'Quito',
    language: 'Spanish',
    population: 16,
    neighbours: ['Peru', 'Columbia'],
    describe: function (){return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries, with a capital called ${this.capital}... We also hate ${this.neighbours[0]}`},
    checkIsIsland: function (){
        this.isIsland = this.neighbours === 0;
        return this.isIsland
    }
}

//      DOT VS BRACKET NOTATION

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries, with a capital called ${myCountry.capital}... We also hate ${myCountry.neighbours[0]}`)

//      OBJECT METHODS

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland()); //after declaring the function, you can just ask for the returned value and get the same answer after

//      ITERATION: THE FOR LOOP

for (voter = 1; voter <= 50; voter++){
    console.log(`Voter number ${voter} is currently voting.. Dale correa hpt`);
}

//      LOOPING ARRAYS, BREAKING AND CONTINUING

const populations = [16, 45, 1441, 30]; 
const percentages2 = [];

for (i = 0; i<populations.length; i++){
    // percentages2[i] = percentageOfWorld(populations[i])
    percentages2.push(percentageOfWorld(populations[i]))
}

function percentageOfWorld(population){
    return population/7900*100;
}

console.log(percentages2)
*/
//      LOOPING BACKWARDS AND LOOPS IN LOOPS

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
]

// for (let i = 0; i<listOfNeighbours.length; i++){
//     console.log(listOfNeighbours[i])
//     for (let neighbour = 0; neighbour<listOfNeighbours[i].length; neighbour++){
//         console.log(listOfNeighbours[i][neighbour])
//     }
// }
