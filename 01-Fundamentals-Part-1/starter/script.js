setTimeout(function () { location.reload(1); }, 3000);

/*

//      VALUES AND VARIABLES

let js = 'amazing';
console.log(40 + 8 + 4 - 5);

console.log('Jonas');

let firstName = 'Luis';
let luis_mario = 'Luis Mario';
let $luis$ = 'Luis';

//      DATA TYPES

let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof JavaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'El huevo');

JavaScriptIsFun = 'El huevo';
console.log(typeof JavaScriptIsFun);

let year
console.log(year);
console.log(typeof year);

year =1991
console.log(year);
console.log(typeof year);

console.log(typeof null);

//      LET CONST AND VAR

//  let -> assign variable that can change in the future
//  const -> assign variable that does not change in the future
//  var --> similar to let but worse (?)

  let age = 30;
age = 31;

const birthyear = 1990;
// birthyear = 1991;

//      BASIC OPERATORS

// Math operators
const now = 2031;
const ageLuis = now-2004;
const ageSarah = now-2018;
console.log(ageLuis, ageSarah);

console.log(ageLuis*2, ageLuis/2, 2**3);
// 2**3 means 2 to the power of 3

const firstName = 'Luis';
const lastName = 'Agreda';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10+5; // x = 10 + 5 => 15
x += 10; // x = x + 10 =>25
x *= 4; // x = x * 4 => 100
x++; // x = x + 1 => 101
x--; // x = x - 1 => 100
console.log(x);

// Comparison operators
console.log(ageLuis > ageSarah);
console.log(ageLuis >= 18);

console.log(now - 2004 > now - 2018);

//      PRECEDENCE OPERATORS

const now = 2031;
const ageLuis = now-2004;
const ageSarah = now-2018;

console.log(now - 2004 > now - 2018);

let x, y
x = y = 25 -10 -5// x = y = 10; x = 10
console.log(x, y);

const averageAge = (ageLuis + ageSarah)/2;
console.log(ageLuis, ageSarah, averageAge);

//      CODING CHALLENGE #1

const 
    markWeight1 = 78,
    markHeight1 = 1.69,
    johnWeight1 = 92,
    johnHeight1 = 1.95,
    bmiMark = markWeight1/markHeight1**2,
    bmiJohn = johnWeight1/johnHeight1**2,
    markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

const 
    markWeight2 = 95,
    markHeight2 = 1.88,
    johnWeight2 = 85,
    johnHeight2 = 1.76,
    bmiMark2 = markWeight2/markHeight2**2,
    bmiJohn2 = johnWeight2/johnHeight2**2,
    markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);

//      STRINGS AND TEMPLATE LITERALS
const 
    firstName = 'Luis',
    job = 'student',
    birthyear = 2004,
    year = 2021;

const Luis = "I'm " + firstName + ', a ' + (year - birthyear) + ' years old ' + job;
console.log(Luis);

// better expressed string | easier to write ``
const LuisNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}`;
console.log(LuisNew)

console.log(`Just another regular string`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple 
lines`);

//      TAKING DECISIONS: IF / ELSE STATEMENTS

const
    age = 19;

if(age >= 18){
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah cannot start her driving license. Wait another ${yearsLeft} years.`);
}

const birthYear = 2021;
let century;

if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(`${century}'s century`)

//      CODING CHALLENGE #2

const 
    markWeight1 = 78,
    markHeight1 = 1.69,
    johnWeight1 = 92,
    johnHeight1 = 1.95,
    bmiMark = markWeight1/markHeight1**2,
    bmiJohn = johnWeight1/johnHeight1**2,
    markHigherBMI = bmiMark > bmiJohn;
if(markHigherBMI === true){
    console.log("Mark's BMI is higher than John's.")
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
}else{
    console.log("John's BMI is higher than Mark's.")
    console.log(`John's BMi (${bmiJohn}) is higher than Mark's (${bmiMark})`)
}

const 
    markWeight2 = 95,
    markHeight2 = 1.88,
    johnWeight2 = 85,
    johnHeight2 = 1.76,
    bmiMark2 = markWeight2/markHeight2**2,
    bmiJohn2 = johnWeight2/johnHeight2**2,
    markHigherBMI2 = bmiMark2 > bmiJohn2;
if(markHigherBMI2 === true){
    console.log("Mark's BMI is higher than John's.")
    console.log(`Mark's BMI (${bmiMark2}) is higher than John's (${bmiJohn2})`)
}else{
    console.log("John's BMI is higher than Mark's.")
    console.log(`John's BMi (${bmiJohn2}) is higher than Mark's (${bmiMark2})`)
}

//      TYPE CONVERSION AND COERCION

// type conversion | manually changing from number string or boolean
const inputYear = '1991';

console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

// We converted inputYear to number but just in the console, the variable still is a string
console.log(Number(inputYear), inputYear);
console.log(String(23), 23);

// type coercion | JavaScript automatically does it for us
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old'); //worse way of saying the code

console.log('23'-'10'-3);
console.log('23'+'10'+3);
console.log('23'*'2');
console.log('23'/'2');
console.log('23'>'18');

let n = '1' + 1; // '1'+1=11
n= n-1 //11-1=10
console.log(n);
// when + operator, JavaScript will  automatically do coersion and detect the string number to a string, but when the operator is - / * then JavaScript will detect the string as a number

console.log(2+3+4+'5'); // 2 + 3 + 4 = 9 | 9 + '5' = '95'
console.log('10' - '4' - '3' - 2 + '5'); // '10' - '4' - '3' = '3' | '3' - 2 = 1 | 1 + '5' = '15'

//      TRUTHY AND FALSY VALUES

// 5 falsy values => 0, '*empty*', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if(money === true){
    console.log("Don't spend it all :)");
}else{
    console.log("You should get a job!");
}

let height
if (height) {
    console.log('Height is defined!')
}else{
    console.log('Height is undefined');
}

//      EQUALITY OPERATORS: == VS ===

let age
age = 18
if (age === 18) console.log('You just became an adult (strict ===)');
if (age == 18) console.log('You just became an adult (loose ==)');

age = '18'
if (age === 18) console.log('You just became an adult (strict ===)');
if (age == 18) console.log('You just became an adult (loose ==)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);
// although if you use the loose comparison operator (== or !=) it will still work, it is better to use strict comparison operator (=== or !==) and change the input to number in order to understand it correctly with Number()
if (favorite === 23){
    console.log('23 is an amazing number');
}else if (favorite === 7){
    console.log('7 is also a cool number');
}else if (favorite === 9){
    console.log('9 is also a great number');
}else{
    console.log('Your number sucks');
}

if (favorite !==23) console.log('Why not 23? stupid fuck');

//      LOGICAL OPERATORS

const hasDriverLicense = true, //A
hasGoodVision = false; //B

console.log(hasDriverLicense && hasGoodVision); //false | Only true if both true
console.log(hasDriverLicense || hasGoodVision); // true | Only false when both false
console.log(!hasDriverLicense); // true => false

if (hasDriverLicense && hasGoodVision) {
    console.log('Sarah is able to drive!')
}else{console.log('Someone else should drive...')}

const isTired = true //C
console.log(hasDriverLicense || hasGoodVision || isTired);

//      CODING CHALLENGE #3

//  Regular exercise
// const dolphins = (96+108+89)/3,
// koalas = (88+91+110)/3;

// if (dolphins > koalas) {
//     console.log('DOLPHINS WON!!!')
// }else if (dolphins < koalas) {
//     console.log('Koalas won.')
// }else{
//     console.log('Draw (dolphins are better anyway)')
// }

// Bonus exercise #1 & 2
let Dolphins = (97+112+101)/3,
    Koalas = (109+95+123)/3;

Dolphins = 10
Koalas = 1


if (Dolphins >= 100 && Koalas >= 100) {
    if (Dolphins>Koalas) {
        console.log('DOLPHINS WON!!!')
    }else if (Dolphins < Koalas){
        console.log('Koalas won.')
    }else if (Dolphins === Koalas) {
        console.log('Draw (dolphins are better anyway)')
    }
}else{
    console.log(`No team has won the trophy because they haven't meet the minimum requirement of 100`)
}

//      SWITCH STATEMENT

const day = 'monday';

switch(day){
    case 'monday': // day === 'monday'
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day')
}

if (day === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
}else if (day === 'tuesday'){
    console.log(`Prepare theory videos`);
}else if (day === 'wednesday' || day === 'thurday') {
    console.log('Write code examples');
}else if (day === 'friday') {
    console.log('Record videos');
}else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
}else{
    console.log('Not a valid day')
}

//      STATEMENTS & EXPRESSIONS

// Expression: ~produce values || piece of value       Ex: 3 + 4 || 1902 || true && false
// Statements: ~actions || a bigger piece of executable code does not produce a value on itself      Ex: if(condition){const x = 13} || console.log('')

//      THE CONDITIONAL (TERNARY) OPERATOR

const age = 23;
age >= 18 ? console.log('My favorite drink is wine!'): console.log('Water is fine.')

// efficient conditional operator statement to declare a variable
const drink = age >= 18 ? 'Wine': 'Water';
console.log(drink);

// ordinary if statement to declare a variable
let drink2;
if (age>=18) {
    drink1 = 'Wine';
}else{
    drink1 = 'Water';
}
console.log(drink1);

// can be used as an expression, which the if statement cannot
console.log(`My favorite drink is ${age >= 18 ? 'Wine': 'Water'}!`)//the conditional operator can be used as an expression if the statement doent end in ;

//      CODING CHALLENGE 4

let bill, tip
bill = 430;
tip = (bill>=50 && bill<=300) ? bill*0.15 : bill*0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${bill+tip}`);
*/
