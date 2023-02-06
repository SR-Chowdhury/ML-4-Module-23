var arr = [
    {name: 'shirt', price: 5000, quantity: 5},
    {name: 'pent', price: 2500, quantity: 3},
    {name: 'hoddy', price: 6000, quantity: 2},
    {name: 'shoe', price: 1900, quantity: 4},
    {name: 'cap', price: 90, quantity: 6},
];

function sumShoping(arr) {
    // console.log(arr);
    let sum = 0;
    for(let i = 0; i< arr.length; i++) {
        sum += arr[i].price * arr[i].quantity;
    }
    return sum;
}

var result = sumShoping(arr);
console.log(result);