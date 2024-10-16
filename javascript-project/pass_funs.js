// pass function as values to other funs
// e.g

/*setTimeout()  it accept 2 param, 1 func and
func can be func with function or with => func.
setTimeout(function() {}); or 
setTimeout(() => {});*/

// we can define separetly
function handleTimeout() {
    console.log('time out');
}
// or
const handleTimeout2 = () => { // arrow function never accept a name in front of them, they always created in an anonymous way, but we can make them non-anonybmous by storing on variable or constant it has certain name.
    console.log('time out again');
}
/*so now we can pass above func as value to below func, but when we pass it we haven't use paratesis, b/c just by passing the fun as a value to this fun.
if we use () it passes return value but it is not the required one, requerd to pass the fun it self.*/
setTimeout(handleTimeout, 2000); // 2000 is the number of milisecond js well wait until this func execute.

setTimeout(handleTimeout2, 3000);

setTimeout(() => {
    console.log( 'more time out');
}, 4000)