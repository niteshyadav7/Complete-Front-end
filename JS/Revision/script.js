'use strict';
// Calculate maximum

// const arr = [-1, 4, -8, -34, 77];
// let max = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   //   console.log(max);
// }
// console.log(max);
// const spanOfArray = function (arr) {
//   let max = -Infinity;
//   let min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return max + min;
// };
// let arr = [-1, 4, -8, -34, 77];
// let ans = spanOfArray(arr);
// console.log(ans);
////////////////////////////////////////////////////
// HOW TO DEBUGE THE PROBLEMS
// const measureKelvin = function () {
//   const temp = {
//     type: "temperature",
//     unit: "celsius",
//     value: prompt("Value in  celsius:"),
//   };
//   const convertInKelvin = Number(temp.value) + 273;
//   return convertInKelvin;
// };
// console.log(measureKelvin());°
// coding Callenge:1
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const data = [...data1, ...data2];
// // console.log(data);
// function printForecast(data) {
//   let str = "";
//   for (let i = 0; i < data.length; i++) {
//     str += `...${data[i]}°C in ${i + 1} days`;
//     // console.log(str);
//   }
//   console.log(str);
// }
// printForecast(data);
// ---------------------🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗--------------------------------------
/*------------------------        CODING CHALLENGES     ----------------------------------------------------*/
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
// Method 01:
/*
const massMark1 = 78;
const heightMark1 = 1.69;
const massMark2 = 95;
const heightMark2 = 1.88;

const massJohn1 = 92;
const heightJohn1 = 1.95;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark1 = massMark1 / (heightMark1 * heightMark1);
const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

// By this method we create boolean variabl sepeartly(ALTERNATIVE OF THIS METHOD (WE USE IN IF-ELSE CONDITIONAL))
const markHigherBMI1 = BMIJohn1 > BMIMark1;
const markHigherBMI2 = BMIJohn2 > BMIMark2;

if (markHigherBMI1 === true) {
  console.log(`John's ${BMIJohn1} has Higher BMI ${BMIMark1} than Mark's`);
} else {
  console.log(`John's ${BMIJohn1} has Lower BMI ${BMIMark1} than Mark's`);
}
console.log(`BMI of Mark is ${BMIMark1}`, `BMI of John is ${BMIJohn1}`);

if (markHigherBMI2 === true) {
  console.log(`John's ${BMIJohn2} has Higher BMI ${BMIMark2} than Mark's`);
} else {
  console.log(`John's ${BMIJohn2} has Lower BMI ${BMIMark2} than Mark's`);
}

console.log(`BMI of Mark is ${BMIMark1}`, `BMI of John is ${BMIJohn1}`);
console.log(`BMI of Mark is ${BMIMark2}`, `BMI of John is ${BMIJohn2}`);
*/
// Method 02:
// anonymous function 1
// const BMI = function (mass, height) {
//   return mass / height ** 2;
// };
//arrow function 2
// const BMI = (mass, height) => mass / height ** 2;
// const BMIMarks = BMI(78, 1.69);
// const BMIJohns = BMI(92, 1.95);
// const markHigherBMI = BMIMarks > BMIJohns;
// console.log(`Mark's ${BMIMarks} and John's ${BMIJohns}   `, markHigherBMI);

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// const name = 'joans';
// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a += b;
//   return a;
// };
// function second(x, y) {
//   var c = 2;
//   return c;
// }
// const x = first();
// console.log(x);
// 'use strict';
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   // console.log(firstName);
//   function printAge() {
//     const output = `You are ${age} , born in ${birthYear}`;
//     console.log(birthYear);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);

/////////////////////////////////////////////
// Varibles
// console.log(myName);
// // console.log(myAge);
// // console.log(address);

// var myName = 'Nitesh';
// let myAge = 23;
// const address = 'Mau';

// Function
// declearation function
// console.log(addDec(2, 3));
// function addDec(a, b) {
//   return a + b;
// }

// // function expression
// console.log(addEx(2, 3));
// const addEx = function (a, b) {
//   return a + b;
// };

// // arrow function
// console.log(addArr(2, 3));
// const addArr = (a, b) => a + b;
// // console.log(addArr(2, 3));
//

///////////////////////////////////////////😋😋😋😋😋😋😋😋😋😋😋😋////////////////////////////////////////////
///////////////////////////////////////////😋😋😋😋😋😋😋😋😋😋😋😋////////////////////////////////////////////
///////////////////////////////////////////😋😋😋😋😋😋😋😋😋😋😋😋////////////////////////////////////////////

// Default Parameters
// 'use strict';
// const createBookings = function (flightNum, numPassengers, price) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
// };
// createBookings('DL12', 23, 199);

// const bookings = [];
// const createBookings = function (name = 'Golu', age = 1, dob = 34) {
//   const booking = {
//     name,
//     age,
//     dob,
//   };
//   // console.log(createBookings);
//   console.log(booking);
//   bookings.push(booking);
// };

// createBookings();
// console.log(bookings);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas',
//   passport: 8875912020,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'HJ234';
//   passenger.name = `Mr. ${passenger.name}`;
//   if (passenger.passport === 8875912020) {
//     alert('Checked In');
//   } else {
//     alert('Checked out');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//////////////////

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 8875912020,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'HJ234';
//   passenger.name = `Mr. ${passenger.name}`;
//   if (passenger.passport === 8875912020) {
//     console.log('Correct Input');
//   } else {
//     console.log('Incorrect Input');
//   }
// };
// // checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);
//////////////////////////
/////////////////////////////////////////////////////////////////////////

//  IN THIS SECTION WE USE MAKE A FUNCTION TO CALCULATE THE AGE OF THE PERSON SO THAT WE CAN USE IT .WHENEVER IS REQUIRED.

// const calcAge = function (birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// };

// // MAKE A HIGHER ORDER FUNCTION
// const outPut = function (str, fun) {
//   return `Hey !There my age is ${fun(str)}`;
// };

// console.log(outPut(2000, calcAge));

// ///////////////////////////////////////////////////////////////////////////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}  ${name}`);
//     return function (x) {
//       console.log(x);
//     };
//   };
// };
// const greeter = greet('Hey!');
// const z = greeter('Jonas');
// z(2);
// // console.log(greeter);
// Challenge By Jonas
// const greet = greeting => {
//   return name => console.log(`${greeting} ${name}`);
// };
// const greet = greeting =>
//    name => console.log(`${greeting} ${name}`);
// ;
// greet('Hey!')('Jonas');
/////////////////////////////////////////////////////////////////

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push(`Flight : ${this.iataCode}${flightNum}`, name);
//   },
// };

// lufthansa.book(234, 'Jonas Schmedtmann');
// lufthansa.book(235, 'Nitesh Yadav');

// console.log(lufthansa);

////////////////////////////////////////
// IIFE:
// function nameX() {
//   console.log(`THIS WILL !NEVER RUN AGAIN`);
// }
// nameX();
// /////////////////////

// (function () {
//   console.log(`This will never run again`);
// })();

// ////////////////////
// (() => console.log(`THIS ARROW FUNCTION NEVER RUN AGAIN`))();

// ?/////////////////////////////

// CLOSURES

// const secureBooking = function () {
//   let numPassengersCount = 0;
//   return function () {
//     numPassengersCount++;
//     console.log(`${numPassengersCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker();
// console.log(booker);
//////////////////////////////////////////////////////
//  Destructuring

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);
// const [x, , z] = arr;
// console.log(x, z);

// const arr = ['Nitesh ', '23', 'Yadav'];
// let [first, , third] = arr;
// [first, , third] = [third, , first];
// console.log(first, third);
////////////////////////

// const obj = {
//   age: [23, 34, 45],
//   names: ['nitesh', 'babban', 'gudia', 'pramila'],
//   abc: function (x, y) {
//     return [this.names[x], this.age[2]];
//   },
// };
// // console.log(obj.abc(0, 2));
// // console.log(obj.abc(2, 1));
// let [first, secondary] = obj.abc(2, 1);
// // console.log(first, secondary);
// [first, secondary] = [secondary, first];
// console.log(first, secondary);

///////////////////////////////////////////////////////////////////////////////
// const obj = {
//   name: 'nitesh',
//   age: 23,
// };
// const { name: myName, age: myAge } = obj;
// console.log(myName, myAge);

// let a = 23;
// let b = 34;
// const obj = { a: 3, b: 5 };
//Uncaught SyntaxError: Unexpected token '=' (at script.js:390:7)
// {a,b} =obj;

////////////////so usee  ()
// ({ a, b } = obj);
// console.log(a, b);
/////////////////////////

// const arr = [1, 2];
// const arrr = [3, 4, 5];
// for (let i = 0; i < arrr.length; i++) {
//   arr.push(arrr[i]);
// }
// console.log(arr);
//
// Join to array
// const arr1 = [1, 23, 4];
// const arr2 = [345, 67, 565];
// const arr = [...arr1, ...arr2];
// console.log(arr);
// const old = {
//   name: 'nitesh',
//   age: 23,
// };
// const newList = { foundedIN: 1999, ...old, fr: 2324 };
// console.log(newList);
/////////////

let obj = {
  name: 'nitesh',
  age: 23,
};
for (const day of Object.keys(obj)) {
  console.log(day);
}
