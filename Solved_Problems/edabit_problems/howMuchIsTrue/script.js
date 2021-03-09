function countTrue(array) {
    let count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === true) {
            count++;
        }
    }
    return count;
}