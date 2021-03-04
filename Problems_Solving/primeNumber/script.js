// Afisarea daca un numar este prim sau nu

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

function display(number) {
    if (primeNumber(number) === true)
        console.log(number + " is a prime number.");
    else
        console.log(number + " is not a prime number.")
}

// TEST
display(0);
display(2);
display(6);
display(11);
display(-4);
display(7);
display(97);
display(128);