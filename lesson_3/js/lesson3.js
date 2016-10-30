
// Task 1.1. Факторіал з рекурсією
function factorialRecursion(n) {
    if (n == 0) {
        return 1; }
    else {
        return n * factorialRecursion (n-1); }
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
        return x * powerRecursion(x, n - 1); }
    else {
        return x; }
}

console.log("Task 1.2. Mathematical power (math degree) with Recursion");
console.log( powerRecursion(2,3));
console.log( powerRecursion(5,2));
console.log( powerRecursion(25,25));

//Task 1.3. Cума цифр цілого числа з рекурсією
function sumRecursion(n) {
    if (n < 10) {
        return n; }
    else {
        return n % 10 + sumRecursion(Math.floor(n / 10)); }
}

console.log("Task 1.3. The sum of the digits of a number with Recursion");
console.log(sumRecursion(7328));
console.log(sumRecursion(3742));
console.log(sumRecursion(1111111));

//Task  1.4. Сума чисел до данного через рекурсію sumTo(n) = n + sumTo(n-1) для n > 1.

function sumToRecursion(n) {
    if (n != 1) {
        return sumToRecursion(n - 1) + n; }
    else {
        return n; }
}

console.log("Task 1.4. The sum of number (sumTo(2) = 2 + 1 = 3) with Recursion");
console.log(sumToRecursion(2));
console.log(sumToRecursion(1));
console.log(sumToRecursion(100));

//Task  1.5. Числа Фібоначчі з рекурсією

function fibonacciRecursion(n) {
    if (n <= 1) {
        return n }
    else {
        return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2); }
}

console.log("Task 1.5. Fibonacci number with Recursion");
console.log(fibonacciRecursion(1));
console.log(fibonacciRecursion(2));
console.log(fibonacciRecursion(3));
console.log(fibonacciRecursion(7));
console.log(fibonacciRecursion(20));

// Task 2.1 Факторіал без рекурсії
function factorial(n) {
    var a = 1;
    for (var i = 1; i <= n; i++) {
        a = a * i; }
    return a;
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
console.log(power(2,3));
console.log(power(5,2));
console.log(power(25,25));

//Task 2.3. Cума цифр цілого числа без рекурсії
function sum(num) {
    var n = 0;
    for(var i = num; i > 0; i = Math.floor(i / 10)) {
        n += (i % 10); }
    return n;
}

console.log("Task 2.3. The sum of the digits of a number without Recursion");
console.log(sum(7328));
console.log(sum(3742));
console.log(sum(1111111));

//Task  2.4. Сума чисел до данного без рекурсії

function sumTo(sum) {
    var n = 0;
    for (var i = 1; i <= sum; i++) {
        n += i; }
    return n;
}

console.log("Task 2.4. The sum of number sumTo(2) = 2 + 1 = 3 without Recursion");
console.log(sumTo(2));
console.log(sumTo(1));
console.log(sumTo(100));

//Task  2.5. Числа Фібоначчі без рекурсії

function fibonacci(n) {
    var a = 1;
    var b = 1;
    for (var i = 3; i <= n; i++) {
        var x = a + b;
        a = b;
        b = x; }
    return b;
}

console.log("Task 2.5. Fibonacci number without Recursion");
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(20));

// Task 3

function count(func, arg, steps){
    console.time();
    while(steps--){
        func.apply(null, arg);
    }
    console.timeEnd();
}

console.log("Task 3.1 Factorial with Recursion and without Recursion");
count(factorialRecursion, [10], 10000);
count(factorial, [10], 10000);

console.log("Task 3.2 Mathematical power (math degree) with Recursion and without Recursion");
count(powerRecursion, [2,3], 10000);
count(power, [2,3], 10000);

console.log("Task 3.3 The sum of the digits of a number with Recursion and without Recursion");
count(sumRecursion, [7328], 10000);
count(sum, [7328], 10000);

console.log("Task 3.4 The sum of number (sumTo(2) = 2 + 1 = 3) with Recursion and without Recursion");
count(sumToRecursion, [100], 10000);
count(sumTo, [100], 10000);

console.log("Task 3.5 Fibonacci number with Recursion and without Recursion");
count(fibonacciRecursion, [20], 10000);
count(fibonacci, [20], 10000);