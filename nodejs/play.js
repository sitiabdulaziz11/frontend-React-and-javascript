const name = 'siti';
let age = 24;
const hasHobbies = true;

age = 30;
// name = 'hidaya';

const summarizeUser =  (username, userage, userhashobby) => {
// const summarizeUser = function (username, userage, userhashobby) {
// function summarizeUser(username, userage, userhashobby) {
    return (
        'name is ' +
        username +
        ', age is ' +
        userage +
    ' and the user has hobbies: ' + 
    userhashobby
    );
};

//const add = (a, b) => {
   // return a + b;
//};
//const add = (a, b) => a + b;
//const addone = a => a + 1;
const addRandom = () => 1 + 2;

//console.log(add(1, 2));
//console.log(addone(1))
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));