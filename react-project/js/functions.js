// function can created ethier with function key word or () => with arrow function syntax.
// function is code that's not executed immediately, but at some point in the future when we call the fun/n. fun/n can be called multiple times. e.g
// to create function :- we start with function key word, the we give the name we want, then parameter list that is with openning and closing paratesis
// then opening and closing curly braces and between those curly brace we put our code.
// but the code is not executed now but in the future.
// e.g

function greet() {
    console.log('Aselamu aleycum World!');
    // with out calling or invoking the fun/n we would see nothing.
}
// to call a fun/n we write the name of the function with pair of parenthesis with out the function key word. with function key word we define it, with out it we calling it e.g 
greet(); // now we can get the output.
greet(); //if we call it twice we get two out put and so on.

// nameing fun/n rule is also follow the same rule as variable naming.

// functions also take parametres, input values
// we can use many paramertes as we want, but we separet it with comma. e.g

//function greetUser(userName, message) {
   // console.log(userName);
    //console.log(message);
//}

//greetUser("siti", 'aselamu aleycum');
//greetUser('mam', 'how are you');

// we can lso use default value and if we not provid value for variable that value is displayed. e.g


//function greetUser(userName, message = "shu") {
   // console.log(userName);
   // console.log(message);
//}
//greetUser("siti"); // but if i provide parameter here it overwrit it.

//function must only have one return statement at most. and 
// function without "return" implicitly return "undefined" e.g


function greetUser(userName, message = "Aselamu aleycum") {
    //console.log(userName);
   // console.log(message);
   return "hi " + userName + "." + message;
}
greetUser("siti"); // this is not displaied b/c it returns valuer which we can use, so we can store it on variable or we could also used as input for console.log.
console.log(greetUser("siti")); // but this is not redable, so we stor it on variable.

function createGreeting(userName, message = "Aselamu aleycum") {
    //console.log(userName);
   // console.log(message);
   return "hi " + userName + "." + message;
}
let greet1 = createGreeting("siti");
console.log(greet1);