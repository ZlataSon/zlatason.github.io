'use strict';

/**
 * Числа Фиббоначи
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
 * https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * Знайти суму перших n чисел фібоначі.
 */

var fibonacciTests = [
    {
        parameters: [1],
        expectedResult: 1
    },
    {
        parameters: [3],
        expectedResult: 4
    },
    {
        parameters: [5],
        expectedResult: 12
    },
    {
        parameters: [20],
        expectedResult: 17710
    },
    {
        parameters: [0],
        expectedResult: 0
    }
];

function fibonacci(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += fib(i);
    }
    return sum;
}

function fib(m) {
    if (m == 0 || m == 1) {
        return m;
    }
    var a = 1;
    var b = 1;
    for (var i = 3; i <= m; i++) {
        var x = a + b;
        a = b;
        b = x;
    }
    return b
}

tasks.push({
    title: "Числа Фиббоначи",
    solution: fibonacci,
    tests: fibonacciTests
});