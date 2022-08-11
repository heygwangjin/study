// Remember, we're gonna use strict mode in all scripts now!
/*
'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2021 - birthYear;

console.log(x);
*/

// PROBLEM 1:
/**
 * We work for a company building a smart home thermometer.
 * Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
 * Keep in mind that sometimes there might be a sensor error."
 **/

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperaturesNew = [
  13,
  -12,
  -9,
  -1,
  'error',
  9,
  13,
  'error',
  30,
  14,
  9,
  5,
];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  // const index = temps.indexOf('error');
  // if (index > -1) temps.splice(index, 1);
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; ++i) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

/*
// PROBLEM 2:
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays.

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; ++i) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures, temperaturesNew);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //* C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  //* B) FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//* A) IDENTIFY
console.log(measureKelvin());
*/

// Coding Challenge #1
/**
 * Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
 * Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
 */
// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the X days? Answer : index + 1

// 2) Breaking up into sub problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

/*
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; ++i) {
    str += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/
