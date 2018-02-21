const obj = {
    foo: 'one',
    bar: 'two',
    fum: 'three',
    quuz: 'four',
    spam: 'five',
}

console.log(Object.keys(obj));

for (let key in obj) {
    console.log(key + ": " + obj[key]);
    //string1 = string1 + obj[key];
}

// for (let i=0; i<Object.keys(obj).length; i++) {
//     let currentKey = Object.keys(obj)[i];
//     console.log(currentKey + ": " + obj[currentKey]);
// }