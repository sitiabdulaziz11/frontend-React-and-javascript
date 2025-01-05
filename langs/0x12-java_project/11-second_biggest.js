const arg = process.argv.length;

if (arg <= 3) {
    console.log(0);
} else {
    const ints = [];
    for (let i = 2; i < arg; i++) {
        ints[i - 2] = parseInt(process.argv[i]);
    }
    ints.sort(function (a, b) {return b - a; });
    console.log(ints[1]);
}

