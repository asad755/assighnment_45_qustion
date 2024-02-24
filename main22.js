"use strict";
// 23.	Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let num1 = 5;
let num2 = 10;
let str1 = "hello";
let str2 = "world!";
// Test 1: Is num1 greater than num2? I predict false.
console.log(num1 > num2);
// Test 2: Is str1 equal to "Hello"? I predict false.
console.log(str1 === "Hello");
// Test 3: Is num2 less than or equal to 10? I predict true.
console.log(num2 <= 10);
// Test 4: Is str1 equal to str2? I predict false.
console.log(str1 == str2);
// Test 5: Is num1 strictly equal to 5? I predict true.
console.log(num1 === 5);
// Test 6: Is str2 greater than str1? I predict false.
console.log(str2.length > num2);
// Test 7: Is num1 less than or equal to num2? I predict true.
console.log(num1 <= num2);
// Test 8: Is str1 truthy? I predict true.
console.log(Boolean(str1));
// Test 9: Is num1 equal to 5 and num2 equal to 10? I predict true.
console.log(num1 == 5 && num2 == 10);
// Test 10: Is str1 equal to "hello" and str2 equal to "world"? I predict false.
console.log(str1 === "hello" && str2 === "world");
