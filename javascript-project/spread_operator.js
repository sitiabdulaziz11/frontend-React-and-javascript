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