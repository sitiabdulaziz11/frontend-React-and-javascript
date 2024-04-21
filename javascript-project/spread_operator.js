const hobbies = ['sport', 'cooking'];

const user = {
    name: 'siti',
    age: 26
}

const newhobbies = ['Reading'];
const mergedhobbies = [...hobbies, ...newhobbies] // after 3 dots we put the arrays in desired order
// the 3 dots pull out all element of the array and add it as new list comma separator in new array. they are stand alon.

// if we do this
const mergedhobbies2 = [hobbies, newhobbies]; // its out put is d/t, it is array two nested array inside

// it also used in objects
const exteduser = {
    isAdmin:true,
    //marge properties from other user by using spread operator;
    ...user // it add all previous key value paris to here.
}
console.log(exteduser);

// Spread & Rest Operator

/*
The spread and rest operators actually use the same syntax: ... 

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

Using the Spread Operator:

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
Here's the spread operator used on an object:

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};
newObject  would then be

{
    name: 'Max',
    age: 28
}
*/
/*The spread operator is extremely useful for cloning arrays and objects. Since both are 
const a = <a href"https://youtu.be/9ooYYRLdg_g">reference types (and not primitives)</a> /*copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array.*/

