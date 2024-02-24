"use strict";
// 21.	They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const dog = new Animal("German Shepherd", 2);
const cat = new Animal("Persian", 1);
console.log(dog);
console.log(cat);
