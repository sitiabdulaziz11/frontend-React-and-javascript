// to create object in js we use pair of curly brace
// inside it we use key value pairs:-
const user = {
    name: "siti",
    age: 26,
    // objects can also stor functions, its called methods. e.g
    greet() { // it created with out function key word.
        console.log('aselamu aleycum');
        // we can also access the property of the object with this keyword. e.g
        console.log(this.age);
    }
};
console.log(user);
// to access individual fildes of that object with dot notation. e.g
// dot is used to access a value on an object.
console.log(user.name);
// to access function inside object:-
user.greet();