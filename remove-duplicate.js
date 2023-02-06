var arr = ['shihan', 'moni', 'shihan', 'tanjima', 'tini', 'moni', 'shihan'];

function removeDuplicate(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        // Method 1
        // if (unique.includes(arr[i]) == false) {
        //     unique.push(arr[i]);
        // }

        // Method 2
        if (unique.indexOf(arr[i]) == -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

var result = removeDuplicate(arr);
console.log(result);