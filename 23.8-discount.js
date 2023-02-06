
function discountPrice(quantity) {
    
    let first100DisRate = 100;
    let second100DisRate = 90;
    let restDisRate = 70;
    var totalQuantity;
    var sum;

    if (quantity <= 100) {
        sum = first100DisRate * 100;
        console.log(sum);
        return sum;
    }
    else if ( quantity <=200) {
        totalQuantity = quantity - 100;
        first100DisRate = 100 * first100DisRate;
        second100DisRate = totalQuantity * second100DisRate;
        sum = first100DisRate + second100DisRate;
        return sum;
    }
    else {
        totalQuantity = quantity - 200;
        first100DisRate = first100DisRate * 100;
        second100DisRate = second100DisRate * 100;
        restDisRate = totalQuantity * restDisRate;
        sum = first100DisRate + second100DisRate + restDisRate;
        return sum;
    }
}

var result = discountPrice(220);
console.log(result);