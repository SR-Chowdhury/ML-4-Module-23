function sum(a, b) {
    if( typeof a !== 'number' || typeof b !== 'number') {
        return 'please provide valid argument';
    }
    return a + b;
}

var result = sum(5, 5);
console.log(result);

let sum1=0; 
for( let i = 0; i<=3;i++){ 
    sum1 = sum1 + i; 
}
console.log(sum1);