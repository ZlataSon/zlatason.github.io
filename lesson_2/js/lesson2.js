ArrayObject = {};

ArrayObject.pop = function () {
    var objectLength = this.length-1;
    element = this[objectLength];
    delete this[objectLength];
    this.length = objectLength;
    return element;
};

ArrayObject.push = function () {
    var parametrLength = arguments.length;
    var elements = this.length;
    for (var i = 0; i < parametrLength; i++) {
        this[elements] = arguments[i];
        elements++;
    }
    return this.length;
};

ArrayObject.slice = function (start, finish) {
    var result = [];
    if (typeof start == "undefined") start = 0;
    if (typeof finish == "undefined") finish = this.length;
    if (start < 0) start = this.length + start;
    if (finish < 0) finish = this.length + finish;
    if ((start > finish) || (start > this.length)) return result;
    for (var i = 0, n = start; n < finish; i++, n++) {
        result[i] = this[n];
    }
    return result
};

ArrayObject.join = function (simbol = ', ') {
    var string = '';
    if (this.length == 0) return string;
    for (i = 0; i < this.length - 1; i++) {
        string = string + this[i].toString();
        string = string + simbol;
    }
    string = string + this[i].toString();
    return string
};

ArrayObject.reverse = function () {

};

ArrayObject.sum = function () {

};

var arrayMethodPop = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodPush = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodSlice = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodJoin = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodReverse = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodSum = ['a', 'b', 'c', 4, 5, 6];

console.log("Method Pop");
console.log(ArrayObject.pop.apply(arrayMethodPop));
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
console.log(ArrayObject.slice.call(arrayMethodSlice, 5));
console.log(ArrayObject.slice.call(arrayMethodSlice, -3));
Array.prototype.slice = ArrayObject.slice;
console.log(arrayMethodSlice.slice(2, 4));
var peremen = arrayMethodSlice.slice(2, -1);
document.getElementById("slice").innerHTML = peremen;

console.log("Method Join");
console.log(ArrayObject.join.call(arrayMethodJoin, "*"));
Array.prototype.join = ArrayObject.join;
console.log(arrayMethodJoin.join("***"));
var joinString = arrayMethodJoin.join(" * * ");
document.getElementById("join").innerHTML = joinString;

console.log("Method Reverse");
console.log(ArrayObject.reverse.apply(arrayMethodReverse));
console.log(arrayMethodReverse);
Array.prototype.reverse = ArrayObject.reverse;
console.log(arrayMethodReverse.reverse());
console.log(arrayMethodReverse);
document.getElementById("reverse").innerHTML = arrayMethodReverse;

console.log("Method Sum");
console.log(ArrayObject.sum.apply(arrayMethodSum));
console.log(arrayMethodSum);
Array.prototype.sum = ArrayObject.sum;
console.log(arrayMethodSum.sum());
console.log(arrayMethodSum);
document.getElementById("sum").innerHTML = arrayMethodSum;
