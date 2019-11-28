let num1 = 55;
let num2 = 12;

function minimoComunMultiplo(num1, num2) {
    let grande, chiquito;

    if (num1 > num2) {
        chiquito = num2;
        grande = num1;
    } else {
        chiquito = num1;
        grande = num2;
    }

    let posible = grande;

    while (posible % chiquito !== 0) {
        posible += grande;
    }

    console.log(posible);
    return posible;
}


minimoComunMultiplo(num1, num2);