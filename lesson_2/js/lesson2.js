ArrayObject = {};

ArrayObject.pop = function () {
    var objectLength = this.length-1;
    element = this[objectLength];
    delete this[objectLength];
    this.length = objectLength;
    return element;
};

ArrayObject.push = function () {

};

ArrayObject.slice = function () {

};

ArrayObject.join = function () {

};

ArrayObject.reverse = function () {

};

var arrayMethodPop = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodPush = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodSlice = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodJoin = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodReverse = ['a', 'b', 'c', 4, 5, 6];

console.log("Method Pop");
console.log(ArrayObject.pop.call(arrayMethodPop));
console.log(arrayMethodPop);
console.log("Method Pop with prototype");
Array.prototype.pop = ArrayObject.pop;
console.log(arrayMethodPop.pop());
console.log(arrayMethodPop);
document.getElementById("pop").innerHTML = arrayMethodPop;

console.log("Method Push");
console.log(ArrayObject.push.call(arrayMethodPush, 7));
console.log(arrayMethodPush);
Array.prototype.push = ArrayObject.push;
console.log(arrayMethodPush.push(8));
console.log(arrayMethodPush);
document.getElementById("push").innerHTML = arrayMethodPush;

console.log("Method Slice");
console.log(ArrayObject.slice.call(arrayMethodSlice, 1, 3));
console.log(ArrayObject.slice.call(arrayMethodSlice, 2));
console.log(ArrayObject.slice.call(arrayMethodSlice, -2));
console.log(arrayMethodSlice);
Array.prototype.slice = ArrayObject.slice;
console.log(arrayMethodSlice.slice(1, 3));

console.log("Method Join");
console.log(ArrayObject.join.call(arrayMethodJoin, "*"));
console.log(arrayMethodJoin);
Array.prototype.join = ArrayObject.join;
console.log(arrayMethodJoin.join("***"));
console.log(arrayMethodJoin);

console.log("Method Reverse");
console.log(ArrayObject.reverse.call(arrayMethodReverse));
console.log(arrayMethodReverse);
Array.prototype.reverse = ArrayObject.reverse;
console.log(arrayMethodReverse.reverse());
console.log(arrayMethodReverse);