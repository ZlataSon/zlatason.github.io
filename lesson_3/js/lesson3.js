
// Task 1.2. Ступінь числа рекурсивно
function stepen(x, n) {
    if (n != 1) {
        return x * stepen(x, n - 1);
    } else {
        return x;
    }
}

console.log("xn = x * xn-1 with Recursion");
console.log( pow(2, 3) ); // 8
console.log( pow(5, 2) );

// Task 2.1 Факторіал без рекурсії
function factorial(n) {
    var z = 1;
    for (i = 1; i <= n; i++) z = z * i;
    return (z);
}

console.log("Factorial without Recursion");
console.log(factorial(10));
console.log(factorial(5));