// arrays are special kind of object, it created with square bracet [].
// object is for group key value pairs, but array is to create just a list of values in certain order
// which accessed by their position or index in that list.

const hobbies = ['sport', 'cooking', 'reading'];
console.log(hobbies[0]);
// arrays can contain any type of values , like other array , object, num or strings etc
// in array individual nalues are sepreted by comman

// we can ues built in utility methods
// to access this method we use array name, dot notation and the method. e.g

hobbies.push('working'); // push() method allows to add new item to an array,
console.log(hobbies);
 
const index = hobbies.findIndex((item) => { //findIndex() allows to find the index of certain value. it take fun as an input and the function should accept one parameter called item
    return item === 'sport'; // if exist return true and findindex returns the index else it return false, and do nothing.
})
console.log(index);
 /* we can write the above fun in short way:
const index1 = hobbies.findIndex((item) => item === 'sport');
console.log(index1); */

