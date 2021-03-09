function changeEnough(changeArray, valueNeeded) {
    const penny = 0.01;
    const nickel = 0.05;
    const dime = 0.10;
    const quarter = 0.25;

    var finalValue = 0;
    finalValue = changeArray[0] * quarter + changeArray[1] * dime + changeArray[2] * nickel + changeArray[3] * penny;
    if (finalValue >= valueNeeded)
        return true;
    return false;
}

console.log(changeEnough([1, 0, 5, 219], 19.99));