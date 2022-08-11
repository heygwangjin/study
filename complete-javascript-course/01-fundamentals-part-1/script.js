/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

//* Values and Variables
console.log("Gwangjin");
console.log(25);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//* Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

// Great
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

// Bad
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
//* Data Types
let javascriptIsFun = true; // Value that holds the data type and not the variable
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Gwangjin");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
//* let, const and var
let age = 25;
age = 26; // reassign or mutate

const birthYear = 1997; // immutable variable
// birthYear = 1990;
// const job; // must be initialized when declaring const variables

var job = "programmer";
job = "teacher";

lastName = "Kim"; // JavaScript will create a property on global object
console.log(lastName);
*/

/*
//* Basic Operators
//* Math Operators
//* Operator basically allows us to transform values or combine multiple values
const now = 2037;
const ageGwangjin = now - 1997;
const ageHoon = now - 1967;
console.log(ageGwangjin, ageHoon);

console.log(ageGwangjin * 2, ageGwangjin / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Gwangjin";
const lastName = "Kim";
console.log(firstName + " " + lastName);

//* Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//* Comparison operators
console.log(ageGwangjin > ageHoon);
console.log(ageGwangjin >= 40);

const isFullAge = ageHoon >= 70;

console.log(now - 1997 > now - 1967);
*/

/*
//* Operator Precedence
const now = 2037;
const ageGwangjin = now - 1997;
const ageHoon = now - 1967;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageGwangjin + ageHoon) / 2;
console.log(ageGwangjin, ageHoon, averageAge);
*/

/*
// Coding Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
//* Strings and Template Literals
const firstName = "Gwangjin";
const job = "student";
const birthYear = 1997;
const year = 2021;

const gwangjin =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(gwangjin);

// Template Literals - 사용하면 좋음
//* `` 안에 ${variables}와 string 을 같이 입력하여 사용하는 방법 (ES6)
const gwangjinNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(gwangjinNew);
*/

/*
//* if / else statement
const age = 12;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Gwangjin can start driving license 🚘");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Gwangjin is too young to start driving license. Wait another ${yearsLeft} years 🤗`
  );
}

const birthYear = 1997;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
// Coding Challenge #2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

/*
//* Type Conversion
//* Type conversion is when we manually convert from one type to another.
const inputYear = "1997";
console.log(Number(inputYear), inputYear);

console.log(Number("Gwangjin")); // NaN means invalid number, but its type is number.
console.log(typeof NaN);

console.log(String(23), 23);

//* Type Coercion
//* Type coercion is when JavaScript automatically converts types behind the scene for us.
console.log("I am " + 23 + " years old"); // Plus operator converts numbers to strings.
console.log("23" - "10" - 3); // Minus operator converts strings to numbers.
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "13"); // JavaScript will convert strings to numbers automatically.
//* Only plus operator converts numbers to strings.

let n = "1" + 1; // '11'
n = n - 1; // 11 - 1
console.log(n);
console.log(typeof n);
console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
*/

/*
//* Truthy and Falsy Values
//* Falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean.
//* 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean("Gwangjin"));
console.log(Boolean({}));
// JS가 Boolean 으로 type coercion 하는 두 가지 시나리오 : when using logical operators, in a logical context(if/else)

const money = 0;
// JS will try to coerce any value into a boolean.
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED!");
}
*/

/*
//* Equality Operators : == vs. ===
//* Loose equality (==) does type coercion.
//* Strict equality (===) does not perform type coercion.
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");
//* When comparing values, always use strict equality with the three equal signs.

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}
*/

/*
// Coding Challenge #3
const scoreDolphins = (97 + 82 + 100) / 3;
const scoreKoalas = (100 + 95 + 100) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100)
  console.log(
    `Team Dolphins is winner! The average score of Dolphins is ${scoreDolphins}`
  );
else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100)
  console.log(
    `Team Koalas is winnner! The average score of Koalas is ${scoreKoalas}`
  );
else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
)
  console.log(
    `Both are winner! The average score of Koalas is ${scoreKoalas} and The average score of Dolphins is ${scoreDolphins}`
  );
else console.log("No one wins the trophy 😭");
*/

/*
//* The switch Statement
const day = "thursday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course strcture");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}
*/

/*
//* The Conditional Operator
//* 조건에 따라 변수에 다른 값을 재할당하고 싶을 때 사용하면 좋다.
const age = 23;
// age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

/*
// Coding Challenge #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
