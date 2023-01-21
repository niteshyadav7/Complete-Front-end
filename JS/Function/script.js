'use strict';
// const toMake = function (str) {
//   return str.toLowerCase();
// };
// // console.log(toMake('HELLO'));
// const transform = function (str, fun) {
//   console.log(`${fun(str)}`);
// };
// transform('HELLO ! HOW ARE YOU', toMake);
/*-------------------👋👋👋👋👋👋👋👋    Call back functions(H.O.F)    👋👋👋👋👋👋👋👋👋👋👋----------------------------------*/
// make a function to lower the letters
// const toMakeLower = function (str) {
//   const transformString = str.toLowerCase();
//   return transformString;
// };

// // Use callBacks
// const convert = function (str, fun) {
//   // BEFORE
//   console.log(`${str}`);
//   // AFTER
//   console.log(`${fun(str)}`);
// };
// convert(
//   'HEY, WHAT ARE YOU DOING RIGHT NOW? \rg ARE YOU FEELING GOOD',
//   toMakeLower
// );
/*-------------------👋👋👋👋👋👋👋👋    function returning functions(H.O.F)    👋👋👋👋👋👋👋👋👋👋👋---------------------------------*/
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const ans = greet('Hey!');
// // console.log(ans);
// ans('Jonas');
// ans('NItesh');

// we can also write in arrow Function:
// const greet = greeting => namee => console.log(`${greeting} ${namee}`);
// greet('Hey!')('NITESH');

/*-------------------👋👋👋👋👋👋👋👋    The Call and Apply Method    👋👋👋👋👋👋👋👋👋👋👋---------------------------------*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum} `
    );
    this.bookings.push({ flight: `${this.airline} ${flightNum} `, name });
  },
};
const swiss = {
  // name: 'Swiss AirLines',
  airline: 'Swiss AirLines',
  iataCode: 'LX',
  bookings: [],
};
lufthansa.book(239, 'Jonas');
lufthansa.book(234, 'Nitesh');
console.log(lufthansa);
const book = lufthansa.book;
book.call(lufthansa, 23, 'Nitesh Yadav');
book.call(swiss, 25, 'Gk');
const BindEW = book.bind(swiss, 34);
// BindEW(23, 'nirtesh');
BindEW('nirtesh');
/*
const xyz = {
  name: 'nitesh',
};
xyz.age = 23;
console.log(xyz.age);
*/
