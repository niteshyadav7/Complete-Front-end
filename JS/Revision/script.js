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
'use strict';
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
console.log(addDec(2, 3));
function addDec(a, b) {
  return a + b;
}

// function expression
console.log(addEx(2, 3));
const addEx = function (a, b) {
  return a + b;
};

// arrow function
console.log(addArr(2, 3));
const addArr = (a, b) => a + b;
// console.log(addArr(2, 3));
