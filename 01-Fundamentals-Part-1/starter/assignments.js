/*
//      VALUES & VARIABLES
const country = 'Ecuador';
const continent = 'South America';
let population = 16;

console.log(country, continent, population);

//      DATA TYPES
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//      LET CONST AND VAR
language = 'Spanish';

//      BASIC OPERATORS
console.log('If Ecuador was split in half, it would have around ' + population/2 + ' million');

population++;
console.log(population);

console.log(population > 6);

console.log(population < 33);

// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
// console.log(description);

//      TEMPLATE LITERALS
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

//      TAKING DECISIONS: IF / ELSE STATEMENTS

if(population>33){
    console.log(`${country}'s populaton is above average.`)
}else{
    console.log(`${country}'s population is ${33-population} million below average`)
}

//      TYPE CONVERSION AND COERCION

console.log('9'-'5');// '9'-'5' = 4
console.log('19'-'13'+'17'); //'19'-'13'= 6 | 6 + '17' = '617'
console.log('19'-'13'+ 17 )//'19'-'13'= 6 | 6 + 17 = 23
console.log('123'< 57 )//'123'< 57 = false
console.log(5 + 6 + '4' + 9 - 4 - 2)//5 + 6 = 11 | 11 + '4' = '114' | '114' + 9 - 4 - 2 = 1143

//      EQUALITY OPERATORS == VS ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// }else if (numNeighbours > 1){
//     console.log('More than 1 border!')
// }else {
//     console.log('No borders :(')
// }

//      LOGICAL OPERATORS

if (language === 'English' && population < 50 && !isIland ) {
    console.log(`You should live in ${country}`)
}else {
    console.log(`${country} does not meet your criteria :/`)
}

//      SWITCH STATEMENT

switch(language){
    case 'chinese':
    case 'mandarin':
        console.log(`Most number of native speakers`);
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case "hindi":
        console.log('number 4');
        break;
    case "arabic":
        console.log('number 5');
        break;
    default:
        console.log('great language too');
}

//      THE CONDITIONAL (TERNARY) OPERATOR

population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`)

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} than average`)*/