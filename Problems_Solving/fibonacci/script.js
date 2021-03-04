// Sirul lui Fibonacci pana la al n-lea termen

function fibonacci(n) {
    let a = [0, 1];
    var nextTerm;
    if (n === 0)
        return 0;
    else if (n === 1)
        return 1;
    else {
        for (var i = 2; i < n; i++) {
            nextTerm = a[i - 1] + a[i - 2];
            a.push(nextTerm);
        }
    }
    return a;
}

//TEST
console.log(fibonacci(1));
console.log(fibonacci(0));
console.log(fibonacci(5));
console.log(fibonacci(15));