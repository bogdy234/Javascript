// Gaseste cele mai lungi cuvinte dintr-o propozitie / vector de stringuri si le afiseaza

function longestWord(a) {
    let b = "";
    let rez = "";
    let max = 0;
    for (var i = 0; i < a.length; i++) {
        b = a[i];
        if (b.length > max) {
            max = b.length;
            rez = b;
        }
    }
    for (var i = 0; i < a.length; i++) {
        b = a[i];
        if (b.length === max && b !== rez)
            rez = rez + " " + b;
    }
    return rez;
}

//TEST
a = ["Ana", "are", "fwaofk", "castelulBran"];
b = "O propozitie pentru testare...";
b = b.split(" ");
console.log(b);
c = a[1];
console.log(c);
console.log(longestWord(a));
console.log(longestWord(b));