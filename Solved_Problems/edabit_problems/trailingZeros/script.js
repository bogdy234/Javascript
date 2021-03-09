function trailingZeros(n) {
    let power = 1;
    let numberOfZeros = 0;
    while (5 ** power <= n) {
        power++;
    }
    for (i = 1; i < power; i++) {
        numberOfZeros = numberOfZeros + Math.floor(n / (5 ** i));
    }
    return numberOfZeros;
}