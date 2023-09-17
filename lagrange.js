const fs = require('fs');

let lagrange = () => {
    let rawdata = fs.readFileSync('numbers.json');
    let numbers = JSON.parse(rawdata);

    let x = numbers.x;
    let y = numbers.y;
    let xF = numbers.xF;
    let lagrangePolinome = 0;

    for (let i = 0; i < x.length; i++) {
        let basePolinome = 1;
        for (let j = 0; j < y.length; j++) {
            if (j === i) continue;
            basePolinome *= (xF - x[j])/(x[i] - x[j])
        }
        lagrangePolinome += basePolinome * y[i];
    }
    return lagrangePolinome;
}

console.log("Answer is: " +lagrange());