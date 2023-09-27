"use strict";
/*
let str2 = "";
function calcAge(birthYear) {
  const age = 2026 - birthYear;

  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      str2 = `You are also a millenial`;
    } else {
      str2 = `You are not a millenial`;

      output = "El";
    }

    console.log(str2);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = "Luis";
calcAge(1996);
const y = 2;
if (y === 2) {
  console.log(`Jonas is a ${job}`);
  const job = "teacher";
  console.log(x);
}

//    HOISTING AND TDZ IN PRACTICE

// Hoisting variables
console.log(me);
console.log(job);
console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;
// Hoisting functions
console.log(addDecl(2,3));
// console.log(addArrow(2,3));
// console.log(addExp(2,3));
function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};


const addArrow = (a, b) => a + b;

//  Example
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products are deleted after 10.`);
}

var x = 1;
const y = 2;
let z = 3;

console.log(y === window.y);
console.log(z === window.z);
console.log(x === window.x);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(2022);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(2023);

const Jonas = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
Jonas.calcAge();

const matilda = {
  year: 2022,
};
matilda.calcAge = Jonas.calcAge;
matilda.calcAge();
const firstName = "Matilda";

*/
const jonas = {
  firstName: "Jonas",
  year: 1995,
  calcAge: function () {
    // console.log(this);
    // console.log(2037 - this.year);
    
    // const isMillenial = () =>
    //   console.log(this.year >= 1981 && this.year <= 1996);
    const self = this; //can use self or that
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(this.firstName);
  },
  // greet: () => console.log(this.firstName),
};

jonas.greet();
console.log(this);

jonas.calcAge();