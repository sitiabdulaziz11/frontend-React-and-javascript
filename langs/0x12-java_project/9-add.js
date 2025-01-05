function add(a, b) {
    
    return a + b;
}
arg1 = parseInt(process.argv[2]);
arg2 = parseInt(process.argv[3]);
console.log(add(arg1, arg2));