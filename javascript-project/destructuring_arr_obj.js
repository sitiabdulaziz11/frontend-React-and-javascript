// destructuring array and object , e.g
const userNameData = ['siti', 'abdulaziz'];
const firstName = userNameData[0];
const lastName = userNameData[1];
// instade of creating this 2 line we could create this 2 variable in one single step
// by adding [] on left side of equal sign
const [firstName1, lastName1] = ['siti', 'abdulaziz']; // the first variable mapped to the first array element and so on.
console.log(firstName1);
console.log(lastName1);

// destructuring also used for objects. e.g
const user = {
    name1: 'siti',
    age1: 26
};
const name1 = user.name;
const age1 = user.age;
// instade of writing like above

const {name: username, age} = { //for obj we use curly brace, the name in the {} have to be field names that are definde in the object. but we can define alies after colon :. :in the right for separeting alies, in the left to separet key and value.
    name: 'siti',
    age: 26
};
console.log(username);
console.log(age);