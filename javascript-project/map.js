const hobbies = ['sport', 'cooking', 'reading'];

const edithobbies = hobbies.map((item) => item + '!'); /* map allows to transform every/any item in an array to any another kind of item.
it also take fun as an input
we return the value which the item should be transformed to. e.g item + "!"
 map not update the orginal array, but it return new array
*/
console.log(edithobbies);


/* with map we can convert the arrey to object
*/
const edithobbies2 = hobbies.map((item) => ({text: item})); // in object we wrapp curly brace with parentheses , else considerd as fun body curlybrace.
// the item here is like a value for that key
console.log(edithobbies2);
