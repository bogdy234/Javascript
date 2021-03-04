function principalDiagonalSum(a) {
    let sum = 0;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[0].length; j++) {
            if (i === j)
                sum = sum + a[i][j];
        }
    }
    return sum;
}

function secondaryDiagonalSum(a) {
    let sum = 0;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[0].length; j++) {
            if ((i + j) === (a.length - 1))
                sum = sum + a[i][j];
        }
    }
    return sum;
}

function sumOfTwoMatrix(a, b) {
    var resultedMatrix = new Array(a.length);
    for (var i = 0; i < a.length; i++) {
        resultedMatrix[i] = new Array(a[0].length)
    }
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            resultedMatrix[i][j] = a[i][j] + b[i][j];
        }
    }
    return resultedMatrix;
}

a = [
    [1, 2, 4],
    [2, 5, 7],
    [0, 5, 1],
];
console.log(a.length) // numar de linii
console.log(a[0].length) // numar de coloane

console.log("Matricea a este:");
console.log(a);
console.log("Suma de pe diagonala principala:" + principalDiagonalSum(a));
console.log("Suma pe diagonala secundara:" + secondaryDiagonalSum(a));
b = [
    [0, 0, 4],
    [1, 2, -1],
    [-2, -2, -1],
];
console.log("Matricea b este: ");
console.log(b);
console.log("Rezultatul in urma adunarii cu matricea b este: ");
console.log(sumOfTwoMatrix(a, b));