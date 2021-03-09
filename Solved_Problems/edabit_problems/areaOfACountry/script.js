function areaOfCountry(countryName, countryArea) {
    const landmass = 148940000;
    percent = Math.round((countryArea * 100 / landmass + Number.EPSILON) * 100) / 100;
    return countryName + " is " + percent + "% of the total world's landmass";
}

console.log(areaOfCountry("Russia", 17098242));