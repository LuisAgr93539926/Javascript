//      STRICT MODES
'use strict';


// setTimeout(function () { location.reload(1); }, 10000);
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest === true) hasDriversLicense = true;
if (hasDriversLicense === true) console.log('I can drive!');

// restricted mode reserved words examples
const interface = 'audio';
const private = 234;
const if = false;

//      FUNCTIONS

function logger(){
    console.log('Hi my name is Luis')
}
// calling a function | running a function | invoking a function
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(2,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,1);
console.log(appleOrangeJuice);

// other types of functions we used
console.log('Hi');
Number('12')

//      FUNCTION DECLARATIONS VS EXPRESSION

//function(x)  ==>  parameter
//function(actual value)  ==>  argument

// Function declaration | You can use the function everywhere in the code, even before the function was declared.
function calcAge1(birthyear){
    return 2037 - birthyear;
}
const age1 = calcAge1(2004);

// Function expression | Instead of assigning a name to the function, we just put it in a variable | You can use the function after you declared it
const calcAge2 = function(birthyear){
    return 2037 - birthyear;
}
const age2 = calcAge2(2004);

console.log(age1, age2);

//      ARROW FUNCTION

// Function expression
const calcAge2 = function(birthyear){
    return 2037 - birthyear;
}

// Arrow Function
const calcAge3 = birthyear => 2037 - birthyear;
console.log(calcAge3(2000));

// const yearsUntilRetirement = birthyear =>{
//     const age = 2037-birthyear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(2000));

// Arrow functions are better suited for one-line functions, but it could also be used for multiple lines of code but it has some limitations | you can also just erase the arrow and put function before the parameters and it will work basically the same
const yearsUntilRetirement = (birthyear, firstName) =>{
    const age = 2021-birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2000, 'Rommy'));
console.log(yearsUntilRetirement(2004, 'Luis'));

//      FUNCTION CALLING OTHER FUNCTIONS

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange. `;
}

function cutFruitPieces(fruit){
    return fruit*4;
}

console.log(fruitProcessor(2, 3));
//      REVIEWING FUNCTIONS

const calcAge = function (birthyear){
    return 2037 - birthyear;
}

const yearsUntilRetirement = function (birthyear, firstName) {
    const age = 2021-birthyear;
    const retirement = 65 - age;
    
    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} already retired!`);
        return -1;
    }
}
console.log(yearsUntilRetirement(2004, 'Luis'));
console.log(yearsUntilRetirement(2000, 'Jorge'));
console.log(yearsUntilRetirement(1992, 'Bob'));

//      CODING CHALLENGE #1 | FUNCTIONS

const calcAverage = (a, b, c,) => (a+b+c)/3;

// Test #1
let dolphinsScore = calcAverage(44,23,71);
let koalasScore = calcAverage(65,54,49);

function checkWinner(dolphinsAverage, koalasAverage){
    if(dolphinsAverage>=koalasAverage*2){
        console.log(`Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`)
    }else if (koalasAverage>=dolphinsAverage*2){
        console.log(`Koalas win (${koalasAverage} vs. ${dolphinsAverage})`)
    }else{
        console.log(`No one one because they didn't reach the parameter of winning double or more the amount of points of the competitor.`)
    }
}

checkWinner(dolphinsScore, koalasScore);

// Test #2
dolphinsScore = calcAverage(85,54,41);
koalasScore = calcAverage(23,34,27);

checkWinner(dolphinsScore, koalasScore);

//      INTRODUCTION TO ARRAYS

const friends = ['Michael', 'Peter', 'Luis']
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length)
// Another way to call an array
const years = new Array(2000,2004,2012,1980);
console.log(years[0])
console.log(years[years.length-3])

// You can change parts of the array afterwards, even though they are const
friends[2] = 'Jay';
console.log(friends[2]);

const firstName = 'Luis';
const luisMario = [firstName, 'Mario', friends, 2021-2004];

console.log(luisMario);

// Exercise
const calcAge = birthyear => 2037 - birthyear;
const Years = [1990, 1967, 2000, 2004, 2017];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

//      BASIC ARRAY OPERATIONS (METHODS)

const friends = ['Michael', 'Peter', 'Luis'];

//Add elements methods
friends.push('Jorge'); // adds element to the end of the array
friends.unshift('Pedro'); // adds element to the beggining of the array
console.log(friends);

// Remove elements methods
friends.pop();// removes element of the end of the array
friends.shift();// removes element of the beggining of the array
console.log(friends)

// Variables that adding or removing methods store
const newLength = friends.push('Jorge');// .push function adds elements to the array
console.log(newLength);

const popped = friends.pop(); // .pop function removes an element from the right
console.log(popped);

// indexOf method to know which position a value is in an array | .includes method to know if a value is in the array with T or F
console.log(friends.indexOf('Michael'));
console.log(friends.indexOf('Peter'));
console.log(friends.indexOf('Luis'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Michael'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter')){
    console.log('You have a friend called Peter');
}

//      CODING CHALLENGE #2

// One way to write the statement

// function calcTip(bill){
//     if (bill >=50 && bill <= 300){
//         const tip = bill * 0.15;
//         return tip;
//     } else{
//         const tip = bill * 0.20;
//         return tip;
//     }
// }

// Another way to write the statement

// const calcTip = function(bill){
//     return bill>=50&&bill<=300 ? bill*0.15 : bill*0.2
// }

// Most efficient way to writhe the statement
const calcTip = bill => bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log(total)

//      INTRODUCTION TO OBJECTS

const luisArray = [
    'luis',
    'Agreda', 
    2037-1991,
    'teacher', 
    ['Michael', 'Peter', 'Steven']
]

const luisObjects = {
    firstName: 'Luis', 
    lastName: 'Agreda', 
    age: 2021-2004,
    friends:['Michael', 'Peter', 'Steven']
}
console.log(luisObjects)
console.log(luisObjects.firstName);

//      DOT VS. BRACKET NOTATION

const luisObjects = {
    firstName: 'Luis', 
    lastName: 'Agreda', 
    age: 2021-2004,
    friends:['Michael', 'Peter', 'Steven']
}
console.log(luisObjects)

console.log(luisObjects.firstName);
console.log(luisObjects['lastName']);

const nameKey = 'Name';
console.log(luisObjects['first' + nameKey]);
console.log(luisObjects['last' + nameKey]);

// const interestedIn = prompt('Pick something you want to know about Luis.. bla bla bla')

// luisObjects[interestedIn] ? console.log(luisObjects[interestedIn]) : console.log('Wrong request!');

// Add new elements
luisObjects.location = 'Ecuador';
luisObjects['TikTok'] = '@luismarioagreda';

console.log(luisObjects.location);
console.log(luisObjects.TikTok);

// Challenge
// "Luis has 3 friends, and his best friend is Michael"
console.log(`${luisObjects.firstName} has ${luisObjects.friends.length} friends, but his favorite friend is ${luisObjects.friends[0]}.`);

//      OBJECT METHODS

const luisObjects = {
    firstName: 'Luis', 
    lastName: 'Agreda', 
    birthYear: 2004,
    friends:['Michael', 'Peter', 'Steven'],
    job: 'Student',
    hasDriverLicense: false,
    
    // Function expression | use new birthYear parameter
    calcAge: function (birthYear){
        return 2037 - birthYear;
    },

    // Function expression | use pre-existing birthYear value from luisObjects
    calcAge: function (){
        return 2021 - this.birthYear;
    },

    // Function expression | same as before, but it returns an age value, it is more efficient to return a value than calling the function multiple times and repeat the same process to get to the value | Most efficient way ✅
    calcAge: function (){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} drivers license`
    }
}

// First function expression | It needs to declare the statement in order to change the parameter in the function
console.log(luisObjects.calcAge(2004));

// Second function expression | It doesn't need to declare the statement because the function is already using the birthYear value from luisObjects
console.log(luisObjects.calcAge());

// Third function expression | It doesn't even declare a function, it just declares a value that is already processed in the object | Most efficient way ✅
console.log(luisObjects.age);
console.log(luisObjects.age);

// Challenge
console.log(luisObjects.getSummary())

//      CODING CHALLENGE #3

const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.fullBMI = this.mass/this.height ** 2;
        return this.fullBMI;
    }
}
console.log(markMiller.calcBMI());

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.fullBMI = this.mass/this.height ** 2;
        return this.fullBMI;
    }
}
console.log(johnSmith.calcBMI());

console.log(`${markMiller.fullName}'s BMI (${markMiller.fullBMI}) is ${markMiller.fullBMI>johnSmith.fullBMI ? `higher` : `lower`} than ${johnSmith.fullName}'s BMI (${johnSmith.fullBMI})`);

//      ITERATION: THE FOR LOOP

for (let rep = 1; rep<=10; rep++){//rep++ => rep = rep + 1
    console.log(`Lifting weight repetition ${rep}`)
}

//      LOOPING ARRAYS, BREAKING AND CONTINUING

const luisArray = [
    'luis',
    'Agreda', 
    2037-1991,
    'student', 
    ['Michael', 'Peter', 'Steven']
]

const types = [];
for (let i = 0; i < luisArray.length; i++){
    console.log(luisArray[i])

    // Filling types array
    // types[i] = typeof luisArray[i]; | less efficient way
    types.push(typeof luisArray[i]) //cleaner way
}
console.log(types)

const years = [1991, 2004, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++){
    ages.push(2021-years[i]);
}
console.log(ages)

// continue & break
// continue
console.log('CONTINUE | ONLY STRINGS');
for (let i = 0; i<luisArray.length; i++){
    if(typeof luisArray[i] !== 'string') continue;
    console.log(luisArray[i], typeof luisArray[i]);
}

// break
console.log('BREAK | BREAK UNTIL NUMBER');
for (let i = 0; i<luisArray.length; i++){
    if(typeof luisArray[i] === 'number') break;
    console.log(luisArray[i], typeof luisArray[i])
}

//      LOOPING BACKWARDS AND LOOPS IN LOOPS

const luisArray = [
    'luis',
    'Agreda', 
    2037-1991,
    'student', 
    ['Michael', 'Peter', 'Steven']
]

// Looping Bacwards
for (let i = luisArray.length-1; i >=0; i--){
    console.log(luisArray[i])
}

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++){ // exercise<4 is the same as exercise<=3
    console.log(`-------------Exercise #${exercise}-------------`)
    for (let rep = 1; rep<=5; rep++){
        console.log(`Exercise ${exercise}: Lifting weights ${rep}`)
    }
}
*/