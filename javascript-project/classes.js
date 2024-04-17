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