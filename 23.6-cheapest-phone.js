var phone = [
    {model: 'iphone 11', ram: '32GB', price: 1200},
    {model: 'iphone 12', ram: '32GB', price: 900},
    {model: 'iphone 14', ram: '32GB', price: 1500},
    {model: 'iphone 11 pro', ram: '32GB', price: 750},
    {model: 'iphone 13 max', ram: '32GB', price: 600},
];

function chepestPhone (phone) {
    // console.log(phone);
    let cheapPhone = phone[0];
    for (let i = 0; i < phone.length; i++) {
        if (cheapPhone.price > phone[i].price) {
            cheapPhone.price = phone[i].price;
        }
    }
    return cheapPhone;
}

var result = chepestPhone(phone);
console.log(result);