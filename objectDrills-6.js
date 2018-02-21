const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

function decodeWords (words, fn) {
    const array = words.split(' ');
    let result = []
    for (i=0; i<array.length; i++) {
        result.push(fn(array[i]));
    }
    //[f,o,r, ,l,o,o,p]
    result = result.join('');
    //for loop
    console.log(result);
    return result;
}

function decode (word) {
    if (cipher.hasOwnProperty(word[0])) {
        console.log(word[cipher[word[0]]-1])
        return word[cipher[word[0]]-1];
    }
    else {
        console.log(' ');
        return ' ';
    }
}

decode('apple');
decode('branch');
decode('caramel');
decode('diglet');
decode('echo');
const message = 'craft block argon meter bells brown croon droop'
decodeWords(message, decode);