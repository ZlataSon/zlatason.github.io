'use strict';

/**
 * Найти суму 2 чител. a + b
 */

var sumTests = [
    {
        parameters: [3, 2],
        expectedResult: 5
    },
    {
        parameters: [1001, 4321],
        expectedResult: 5322
    },
    {
        parameters: [-1, 0],
        expectedResult: -1
    }
];


function sum(a, b) {
    return a + b;
}


tasks.push({
    title: "a + b",
    solution: sum,
    tests: sumTests
});