// Task 1.1. Факторіал з рекурсією
function factorialRecursion(n) {
    if (n == 0)
        return 1;
    else
        return n * factorialRecursion (n-1);
}

console.log("Task 1.1 Factorial with Recursion");
console.log(factorialRecursion(10));
console.log(factorialRecursion(5));
console.log(factorialRecursion(105));
console.log(factorialRecursion(1));
console.log(factorialRecursion(0));

// Task 1.2. Ступінь числа з рекурсією
function powerRecursion(x, n) {
    if (n != 1) {
        return x * powerRecursion(x, n - 1);
    } else {
        return x;
    }
}

console.log("Task 1.2. Mathematical power (math degree) with Recursion");
console.log( powerRecursion(2, 3) );
console.log( powerRecursion(5, 2) );
console.log( powerRecursion(25, 25) );

//Task 1.3. Cумма цифр цілого числа з рекурсією
function sumRecursion(n) {
    if (n < 10) {
        return n; }
    else {
            return n % 10 + sumRecursion(Math.floor(n / 10));
        }
}

console.log("Task 1.3. The sum of the digits of a number with Recursion");
console.log(sumRecursion(7328) );
console.log(sumRecursion(3742) );
console.log(sumRecursion(1111111) );

// Task 2.1 Факторіал без рекурсії
function factorial(n) {
    var z = 1;
    for (i = 1; i <= n; i++) z = z * i;
    return (z);
}

console.log("Task 2.1. Factorial without Recursion");
console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(105));
console.log(factorial(1));
console.log(factorial(0));


// Task 2.2. Ступінь числа без рекурсії
function power(x, n) {
    var a = x;

    for (var i = 1; i < n; i++) {
        a *= x; }
    return a;
}

console.log("Task 2.2. Mathematical power (math degree) without Recursion");
console.log( power(2, 3) );
console.log( power(5, 2) );
console.log( power(25, 25) );


//Task 2.3. Cумма цифр цілого числа без рекурсії
function sum(num) {
    var n = 0;
    for(i = num; i > 0; i = Math.floor(i / 10))
        n += (i % 10);
    return n;
}

console.log("Task 2.3. The sum of the digits of a number without Recursion");
console.log(sum(7328) );
console.log(sum(3742) );
console.log(sum(1111111) );