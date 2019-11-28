let num1 = 100;
let num2 = 150;

function maximoComunDivisor(num1, num2) {
    var x = 0;
    while (num1 !== 0) {
        x = num2 % num1;
        num2 = num1;
        num1 = x;
    }

    console.log(num2);
    return num2;
}


maximoComunDivisor(num1, num2);