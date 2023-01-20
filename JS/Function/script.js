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
const toMakeLower = function (str) {
  const transformString = str.toLowerCase();
  return transformString;
};

// Use callBacks
const convert = function (str, fun) {
  // BEFORE
  console.log(`${str}`);
  // AFTER
  console.log(`${fun(str)}`);
};
convert(
  'HEY, WHAT ARE YOU DOING RIGHT NOW? \rg ARE YOU FEELING GOOD',
  toMakeLower
);
/*-------------------👋👋👋👋👋👋👋👋    function returning functions(H.O.F)    👋👋👋👋👋👋👋👋👋👋👋---------------------------------*/
