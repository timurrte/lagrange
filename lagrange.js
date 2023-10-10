const numbers1 = {
    "xF": 0.235,
    "x": [0.11, 0.15, 0.21, 0.29, 0.35, 0.4],
    "y": [9.065421, 6.61659, 4.69170, 3.35106, 2.7395, 2.36522]
}

const numbers2 = {
        "xF": 1.4258,
        "x": [1.415, 1.420, 1.425, 1.430, 1.435, 1.440],
        "y": [0.888551, 0.889599, 0.890637, 0.891667, 0.892687, 0.893698]
}

let lagrange = (numbers) => {

    let x = numbers.x;
    let y = numbers.y;
    let xF = numbers.xF;
    let lagrangePolinome = 0; 

    for (let i = 0; i < x.length; i++) {
        let basePolinome = 1;
        for (let j = 0; j < y.length; j++) {
            if (j === i) continue;
            basePolinome *= (xF - x[j])/(x[i] - x[j]) 
            // обчислюємо базовий поліном для кожного j окрім поточного i
        }
        
        lagrangePolinome += basePolinome * y[i];
        // додаємо до остаточного значення поліному значення базового поліному помноженого на y
    }
    return lagrangePolinome;
}

console.log("Значення y в точці " + numbers1.xF  + ": " + lagrange(numbers1));
console.log("Значення y в точці " + numbers2.xF  + ": " + lagrange(numbers2));