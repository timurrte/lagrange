const fs = require("fs");

const x = [0, 1, 2, 3, 4, 5];
const y = [-1.1, -6.5, -12.7, -21.7, -33.2, -45.7];

function leastSquares(x, y) {

  const n = x.length;
  

  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumX2 = 0;
  
  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumX2 += x[i] * x[i];
  }
  

  const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const b = (sumY - a * sumX) / n;
  
  return { a, b };
}


const { a, b } = leastSquares(x, y);
console.log(`Результат: y = ${a}x + ${b}`);
