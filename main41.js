"use strict";
// 42.	Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
const magician_name = ['Paul Daniels', 'David Blaine', 'Derren Brown', 'Harry Houdini', 'Penn & Teller'];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        // joining the string the great with magicians name
        magician[i] = "The Great " + magician[i];
    }
}
show_magicians(magician_name);
console.log(magician_name);
