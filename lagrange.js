const fs = require('fs');

let lagrange = (filename) => {
    let rawdata = fs.readFileSync(filename);
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
        let sisi = basePolinome * y[i];
        console.log(sisi)
        lagrangePolinome += sisi;
    }
    return lagrangePolinome;
}

console.log("Відповідь на 1 задачу: " +lagrange("numbers.json"));
console.log("Відповідь на 2 задачу: " +lagrange("numbers2.json"));