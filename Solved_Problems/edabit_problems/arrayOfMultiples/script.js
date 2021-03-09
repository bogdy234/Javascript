function arrayOfMultiples(num, length) {
    let finalArray = [];
    let j = 1;
    for (let i = 0; i < length; i++) {
        finalArray.push(num * j);
        j++;
    }
    return finalArray;
}