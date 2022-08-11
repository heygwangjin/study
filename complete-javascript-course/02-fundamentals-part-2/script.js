"use strict";
/*
//* 1. strict mode forbids us to do certain things
//* 2. It creates visible errors
"use strict"; // has to be the very first statement in the script

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

/*
//* Functions
//* Functions allow us to write more maintainable code. Because we can create reusable chunks of code.
function logger() {
  console.log("My name is Oldman");
}

//* Calling / Running / Invoking the function
logger();
logger();

//* apples and oranges are parameter of function
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//* 5, 0 are the arguments of parameters
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
//* Function Declarations vs. Expressions
// Parameter(birthYear) is like a local variable, that's only available inside of this function.
//* Function Declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1997);
console.log(age1);

//* Function Expression
//* Remember that an expression produces a value.
//* Functions are actually just values without type in JavaScript.
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1967);
console.log(age2);

//* 가장 큰 차이점 : 함수 선언식은 함수 정의하기 전에 호출 가능하지만, 함수 표현식은 함수 정의 전에 호출이 불가능하다. (호이스팅)
//* 강사는 표현식을 선호
*/

/*
//* Arrow Functions
//* Arrow function is simply a special form of fuction expression that is shorter and therefore fatser to write.
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Oldman"));
console.log(yearsUntilRetirement(1991, "Jonas"));
//* Arrow functions has no 'this' keyword.
*/

/*
//* Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
//* Reviewing Functions
const calcAge = function (year) {
  return 2021 - year;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} days🙌`);
    return retirement;
  } else {
    console.log(`${firstName} already retired🎉`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1997, "Oldman"));
console.log(yearsUntilRetirement(1947, "Oldman"));
*/

/*
// Coding Challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;
function checkWinner(avgTeam1, avgTeam2, nameTeam1, nameTeam2) {
  if (avgTeam1 >= avgTeam2 * 2) {
    console.log(`${nameTeam1} win 🏆(${avgTeam1} vs. ${avgTeam2})`);
  } else if (avgTeam2 >= avgTeam1 * 2) {
    console.log(`${nameTeam2} win 🏆 (${avgTeam2} vs. ${avgTeam1})`);
  } else {
    console.log("No team wins :(");
  }
}
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas, "Dolphins", "Koalas");
// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas, "Dolphins", "Koalas");
*/

/*
//* Introduction to Arrays (literal syntax)
//* Only primitive values are immutable in const variables, but an Array is not primitive values. It means that an Array can be mutated
const friends = ["Michael", "Steven", "Peter"]; // more usual than new Array()
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // length is so-called property.
console.log(friends[friends.length - 1]); // [] 안에는 any expression 가능

friends[2] = "Jay";
console.log(friends);

//! friends = ["bob"]; // TypeError: Assignment to constant variable

const firstName = "Gwangjin";
const gwangjin = [firstName, "Kim", 2021 - 1997, "student", friends];
console.log(gwangjin);
console.log(gwangjin.length);

// Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const years = [1998, 1967, 2002, 2020, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/

/*
//* Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
const noLongerFriend = friends.pop();
console.log(noLongerFriend);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Hyeonwoo"));

//* ES6 includes (strict equality)
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Hyeonwoo"));
console.log(friends.includes("23"));
console.log(friends);
//* we can use the include method to write conditionals
*/

/*
// Coding Challenge #2
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
*/

/*
//* Introduction To Objects
//* In objects, we define key value pairs. Each of keys is also called a property.
const gwangjin = {
  firstName: "Gwangjin",
  lastName: "Kim",
  age: 2021 - 1997,
  job: "student",
  friends: ["Hyunwoo", "Minsu", "Seokchan"],
}; // Object Literal Syntax

//* Dot vs. Bracket Notation
console.log(gwangjin.firstName);
console.log(gwangjin["firstName"]); // bracket 안에는 expression 가능, 사용자 입력 받을 때 유용

const interestedIn = prompt(
  "What do you want to know about Gwangjin? Choose between firstName, lastName, age, job, and friends"
);
if (gwangjin[interestedIn]) {
  console.log(gwangjin[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

gwangjin.location = "South Korea";
gwangjin["instagram"] = "pangj1n";

// Challenge
console.log(
  `${gwangjin.firstName} has ${gwangjin.friends.length} friends, and his best friend is called ${gwangjin.friends[0]}`
);
//* Bracket Notation에는 모든 expression들이 올 수 있다.
*/

/*
//* Object Methods
//* this keyword is basically equal to the object on which the method is called
const gwangjin = {
  firstName: "Gwangjin",
  lastName: "Kim",
  birthYear: 1997,
  job: "student",
  friends: ["Hyunwoo", "Minsu", "Seokchan"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2021 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  }, //* 만약 이 메서드의 복잡도가 높다면, 많이 호출되면 CPU를 많이 사용할테니, 호출을 최대한 줄이는 방법으로 그냥 this.age 프로퍼티를 생성

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
//* calcAge는 method라고 불리고, 얘도 gwangjin object의 프로퍼티 중 하나이다. calcAge 프로퍼티는 함수 값을 가진다. (function expression이기 때문)
// console.log(gwangjin.calcAge);
// console.log(gwangjin.calcAge(1997));
// console.log(gwangjin["calcAge"](1997));

console.log(gwangjin.calcAge());
console.log(gwangjin.age);
console.log(gwangjin.age);
console.log(gwangjin.getSummary());
gwangjin.hasDriversLicense = false;
console.log(gwangjin.getSummary());
*/

/*
// Coding Challenge #3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcbmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcbmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcbmi() > john.calcbmi()
  ? console.log(
      `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
    )
  : console.log(
      `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
    );
*/

// Coding Challenge #4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
