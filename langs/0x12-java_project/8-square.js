size = parseInt(process.argv[2]);
if (!size) {
    console.log('Missing size');
} else {
    //for (i = 0; i < size; i++)
    //{
        //let row = '';
        for (j = 0; j < size; j++) {
            console.log('X'.repeat(process.argv[2]));
           // row += 'X'
        }
       // console.log(row);
        
    //}
}
