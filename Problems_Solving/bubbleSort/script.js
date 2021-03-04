// Sortarea unui vector cu Bubble Sort si afisarea in consola

function bubbleSort(a) {
    let n = a.length
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    return a;
}

function bubbleSortOptimized(a) {
    let n = a.length;
    do {
        var swapped = false;
        for (var i = 1; i < n; i++) {
            if (a[i - 1] > a[i]) {
                [a[i - 1], a[i]] = [a[i], a[i - 1]];
                swapped = true;
            }
        }
    }
    while (swapped === true)
    return a;
}

// TEST
vector = [5, 4, 3, 2, 10, 2, -5];
console.log("Before sort:" + vector);
console.log("After sort:" + bubbleSort(vector));
console.log("After optimised sort:" + bubbleSortOptimized(vector));