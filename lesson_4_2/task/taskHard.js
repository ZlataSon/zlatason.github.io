'use strict';

/**
 * Drazil and Factorial
 *
 * Drazil is playing a math game with Varda.
 * Let's define F(x) for positive integer x as a product of factorials of its digits.
 * For example, F(135) = 1! * 3! * 5! = 720
 *
 * First, they choose a decimal number a consisting of n digits that contains at least one digit larger than 1.
 * This number may possibly start with leading zeroes. Then they should find maximum positive number x satisfying
 * following two conditions:
 *
 * 1. x doesn't contain neither digit 0 nor digit 1.
 * 2. F(x) = F(a).
 * Help friends find such number.
 *
 * Input
 * One string input parameter length <= 15. There is at least one digit in a that is larger than 1.
 * Number a may possibly contain leading zeroes.
 *
 * Output
 * Output a maximum possible integer satisfying the conditions above.
 * There should be no zeroes and ones in this number decimal representation.
 *
 * *** в перекладі :-) ***
 * Drazil играет в математическую игру с Varda.
 *
 * Определим  для целого числа x как произведение факториалов его цифр. Например, .
 *
 * Сперва выбирается число a, состоящее из n цифр и содержащее не менее одной цифры, превосходящей 1. Это число может начинаться с ведущего нуля. Цель игры — найти наибольшее возможное целое число x, удовлетворяющее следующим двум условиям:
 *
 * 1. x не содержит ни цифру 0, ни цифру 1.
 * 2. F(x) = F(a).
 *
 * Помогите друзьям найти такое число.
 *
 * Входные данные
 * В первой строке записано целое число n (1 ≤ n ≤ 15) — количество цифр в числе a.
 *
 * Во второй строке записано n цифр числа a. В числе a есть не менее одной цифры, превышающей 1. Число a может содержать ведущие нули.
 *
 * Выходные данные
 * Выведите наибольшее возможное целое число, удовлетворяющее условиям, данным выше. В десятичной записи этого числа не должно быть нулей и единиц.
 *
 */

var drazilTest = [
    {
        parameters: ["1234"],
        expectedResult: 33222
    },
    {
        parameters: ["555"],
        expectedResult: 555
    }
];
/**
 * In the first case, F(1234) = 1! * 2! * 3! * 4! = 288 = F(33222)
 */


function drazil(boys, girls) {
    if (boys.length < 1 && boys.length > 15) {
        return NaN;
    }
    var array = ["0", "0", "2", "3", "322", "5", "53", "7", "7222", "7332"];
    var result = "";
    for (var i = 0; i < boys.length; i++) {
        if ( boys[i] != "0" && boys[i] != "1") {
            result += array[boys[i]];
        }
    }
    result = result.split("").sort().reverse().join("");
    return +result;
}

tasks.push({
    title: "Drazil and Factorial. Drazil играет в математическую игру с Varda. Определим  для целого числа x как произведение " +
    "факториалов его цифр. Например, Сперва выбирается число a, состоящее из n цифр и содержащее не менее одной цифры, " +
    "превосходящей 1. Это число может начинаться с ведущего нуля. Цель игры — найти наибольшее возможное целое число x, " +
    "удовлетворяющее следующим двум условиям: 1. x не содержит ни цифру 0, ни цифру 1; 2. F(x) = F(a). Помогите друзьям " +
    "найти такое число. Входные данные В первой строке записано целое число n (1 ≤ n ≤ 15) — количество цифр в числе a. " +
    "Во второй строке записано n цифр числа a. В числе a есть не менее одной цифры, превышающей 1. Число a может содержать " +
    "ведущие нули. Выходные данные Выведите наибольшее возможное целое число, удовлетворяющее условиям, данным выше. " +
    "В десятичной записи этого числа не должно быть нулей и единиц",
    solution: drazil,
    tests: drazilTest
});
