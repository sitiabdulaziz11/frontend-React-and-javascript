// with class we can create blueprint that can then later be used to create the actual objects.

class User {
    // we can also add constructor, with special keywod "constructor"
    constructor(name, age) {
        // create properties and stor the parametrs value with the help of "this" e.g
        this.name = name;
        this.age = age;
    }
    // we can add method that can be part of that bluprint. e.g
    greet() {
        console.log('hi');
    }
}
// then we instantiating it with "new" keyword. e.g
const user1 = new User("mane", 35); // now we created new object based on the above plueprint.
console.log(user1);
user1.greet();

// Classes
/*
Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 

Like this:

class Person {
    constructor () {
        this.name = 'Max';
    }
}
 
const person = new Person();
console.log(person.name); // prints 'Max'
In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

class Person {
    name = 'Max';
}
 
const person = new Person();
console.log(person.name); // prints 'Max'
You can also define methods. Either like this:

class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}
 
const person = new Person();
person.printMyName();
Or like this:

class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.

You can also use inheritance when using classes:

class Human {
    species = 'human';
}
 
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'
*/