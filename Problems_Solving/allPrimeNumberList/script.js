// Afiseaza toate numerele prime dintr-un sir

function primeNumber(number) {
    if (number === 2)
        return true;
    if (number < 2)
        return false;
    for (var i = 2; i <= number / 2; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}

function primeNumbersVector(a) {
    let display = "";
    for (var i = 0; i < a.length; i++) {
        if (primeNumber(a[i]) === true)
            display = display + a[i] + " ";
    }
    return display;
}

//TEST
vector = [1, 4, 2, 5, 0, -4, 100, 23];
console.log("Sirul este:" + vector);
console.log("Numerele prime din sir sunt:");
console.log(primeNumbersVector(vector));