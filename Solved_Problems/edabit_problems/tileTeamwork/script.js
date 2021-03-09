function possibleBonus(a, b) {
    if (a < b && b - a <= 6)
        return true;
    return false;
}