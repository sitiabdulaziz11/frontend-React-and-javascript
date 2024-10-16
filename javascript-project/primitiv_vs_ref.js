function greeter(greetfn) {
    greetfn();
    
    greeter(() => console.log('hi'));
}

let user = 'message' /* is primitives
boolans, string, numbers are all primitives.
primitives are we can't eidit them.they produce 
new values. not edit the previous one*/

// arrays are objects and objects in javascript are so-called reference values.

// in variable we don't stor value, but instade the address of that value in memory. and the address of that place in memory that's stored in this constant.

const hob = ['sport', 'working'];
hob.push('cooking');
console.log(hob);
// here the array in memory changes , the addres does not

//const means does not mean the value can't be edited, but that variable can't be overwritten.
// e.g i cant do hob = [] or other value

// the value(i.e the object /array) can be edited without changing that address.