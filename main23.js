"use strict";
// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, 
//   greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let str1 = "hello";
let str2 = "world";
let str3 = "HELLO";
let num1 = 5;
let num2 = 10;
let arr = [1, 2, 3, 4, 5];
let arr1 = ["Najam", "Ali", "Zubair"];
// Test 1: Is str1 equal to "hello"? I predict true.
console.log(str1 == "hello");
// Test 2: Is str1 not equal to str2? I predict true.
console.log(str1 != str2);
// Test 3: Is str1 equal to str3 when case is ignored? I predict true.
console.log(str1.toLowerCase() == str3.toLowerCase());
// Test 4: Is num1 greater than num2? I predict false.
console.log(num1 > num2);
// Test 5: Is num2 greater than or equal to 10? I predict true.
console.log(num2 >= 10);
// Test 6: Is num1 less than or equal to num2? I predict true.
console.log(num1 <= num2);
// Test 7: Is num1 equal to 5 and num2 equal to 10? I predict true.
console.log(num1 == 5 && num2 == 10);
// Test 8: Is num1 greater than 3 or num2 less than 5? I predict true.
console.log(num1 > 3 || num2 < 5);
// Test 9: Is the number 3 in the array? I predict true.
console.log(arr.includes(3));
// Test 10: Is the number 6 not in the array? I predict true.
console.log(!arr.includes(6));
// Test 11: Is the name "Hiba Noor" not in the array? I predict true.
console.log(!arr.includes(6));
