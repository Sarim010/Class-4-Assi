"use strict";
// Question 1
let greeting;
greeting = "Hello, World";
console.log(greeting);
// Question 2
// let num:number = 1;
// let num:number = 2;
// num1 + num2;
// num1 - num2;
// num1 * num2;
// num1 / num2
// Question 3
let a = 1;
let b = 2;
a = a * b;
b = a / b;
console.log(a);
console.log(b);
// Question 4
// let message:string;
// message = 5; // compiling errir cannot assign number value to string
// Question 5
let roll1 = 2;
let roll2 = 5;
console.log(`The remainder of ${roll1} & ${roll2} is ${roll1 % roll2}`);
// Question 6
let counter = 0;
counter = counter + 1;
counter += 1;
counter++;
// Question 7
let c = true;
let d = false;
let e = true;
c && d && e; // andgate false
c || d || e; // or gate true
!c;
!d;
!e; // note gate
// Question 8
let num = 10;
num += 1;
num -= 1;
num *= 1;
num /= 1;
// Question 9
let numZ = 12;
if (numZ % 2 == 0) {
    console.log(`${numZ} is a even number`);
}
else {
    console.log(`${numZ} is an odd number`);
}
// Question 10
let age;
let currentyear = 2024;
let birthyear = 2000;
age = currentyear - birthyear;
if (age >= 18) {
    console.log(`yes your are eligible for vote`);
}
else {
    console.log(`sorry you are not eligible for vote`);
}
// Question 11
// Question 12
// Question 13
let tempCelcius;
let tempFahrenheit = 68;
tempCelcius = (tempFahrenheit - 32) * 5 / 9;
console.log(`Temperature in degree celsius is ${tempCelcius}`);
// Question 14
let numberx = 0;
if (numberx > 0) {
    console.log(`${numberx} a positive number`);
}
else {
    console.log("number is 0");
}
// Question 15
let numY = 2;
console.log(`${numY} X 1 ${numY * 1}`);
console.log(`${numY} X 2 ${numY * 2}`);
console.log(`${numY} X 3 ${numY * 3}`);
console.log(`${numY} X 4 ${numY * 4}`);
console.log(`${numY} X 5 ${numY * 5}`);
console.log(`${numY} X 6 ${numY * 6}`);
console.log(`${numY} X 7 ${numY * 7}`);
console.log(`${numY} X 8 ${numY * 8}`);
