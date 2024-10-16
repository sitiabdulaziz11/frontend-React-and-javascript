// arrow fun/n used for anonymous fun
// anonymous fun is fun don't need name can be also created like:-
const greet = function() {
    console.log('name');
}
greet();
// or we can do export
//export default function() {

//}
// or 
() => {
    // when we use arrow function we must ommit function
}
//an also do 
export default (a, b) => {
    console.log('hh');
    return a + b
}
// notes from instructer
/*
Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this  keyword (see here).

Arrow function syntax may look strange but it's actually simple.

function callMe(name) { 
    console.log(name);
}
which you could also write as:

const callMe = function(name) { 
    console.log(name);
}
becomes: 

const callMe = (name) => { 
    console.log(name);
}
Important: 

When having no arguments, you have to use empty parentheses in the function declaration:

const callMe = () => { 
    console.log('Max!');
}
When having exactly one argument, you may omit the parentheses:

const callMe = name => { 
    console.log(name);
}
When just returning a value, you can use the following shortcut:

const returnMe = name => name
That's equal to:

const returnMe = name => { 
    return name;
}
*/

// Exports & Imports
/*
In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.

You got two different types of exports: default (unnamed) and named exports:

default => export default ...; 

named => export const someData = ...; 

You can import default exports like this:

import someNameOfYourChoice from './path/to/file.js'; 

Surprisingly, someNameOfYourChoice  is totally up to you.

Named exports have to be imported by their name:

import { someData } from './path/to/file.js'; 

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

When importing named exports, you can also import all named exports at once with the following syntax:

import * as upToYou from './path/to/file.js'; 

upToYou  is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you export const someData = ...  (/path/to/file.js ) you can access it on upToYou  like this: upToYou.someData .
*/