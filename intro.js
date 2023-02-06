var name = 'Shihan';
var age = 30;
var obj = {
    id: '2078919',
    uni: 'Porstmouth'
}
var arr = [10,20,30,40];
function func(a, b) {
    return a + b;
}
func(5, 6);

console.log(typeof name);
console.log(typeof age);
console.log(typeof obj);
console.log(typeof func);
// Array should be checked by Array.isArray
console.log(Array.isArray(arr));

// Slice()
var sliceArr = arr.slice(1, 3);
console.log(sliceArr);

// Splice()
var spliceArr = arr.splice(1, 3, 100, 200);
console.log(spliceArr);
console.log('After splice: '+ arr);
console.log(Array.isArray(arr));