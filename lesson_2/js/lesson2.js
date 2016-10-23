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
    for (var i = 0; i < this.length - 1; i++) {
        string = string + this[i].toString();
        string = string + simbol;
    }
    string = string + this[i].toString();
    return string
};

ArrayObject.reverse = function () {
    for (let i = 0, n = this.length - 1; i < n; i++, n--) {
        var element = this[i];
        this[i] = this[n];
        this[n] = element;
    }
    return this;
};

Number.prototype.sum = function (y=0) {
    if (isNaN(y)) y = 0;
    return this+(+y);
};

var arrayMethodPop = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodPush = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodSlice = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodJoin = ['a', 'b', 'c', 4, 5, 6];
var arrayMethodReverse = ['a', 'b', 'c', 4, 5, 6];

console.log("Method Pop");
console.log(ArrayObject.pop.apply(arrayMethodPop));
console.log(arrayMethodPop);
console.log("Method Pop with prototype");
Array.prototype.pop = ArrayObject.pop;
console.log(arrayMethodPop.pop());
document.getElementById("pop").innerHTML = arrayMethodPop;

console.log("Method Push");
console.log(ArrayObject.push.call(arrayMethodPush, 7));
console.log(arrayMethodPush);
console.log("Method Push with prototype");
Array.prototype.push = ArrayObject.push;
console.log(arrayMethodPush.push(8));
document.getElementById("push").innerHTML = arrayMethodPush;

console.log("Method Slice");
console.log(ArrayObject.slice.call(arrayMethodSlice, 1, 3));
console.log(ArrayObject.slice.call(arrayMethodSlice, 5));
console.log(ArrayObject.slice.call(arrayMethodSlice, -3));
console.log("Method Slice with prototype");
Array.prototype.slice = ArrayObject.slice;
console.log(arrayMethodSlice.slice(2, 4));
var peremen = arrayMethodSlice.slice(2, -1);
document.getElementById("slice").innerHTML = peremen;

console.log("Method Join");
console.log(ArrayObject.join.call(arrayMethodJoin));
console.log(ArrayObject.join.call(arrayMethodJoin, "*"));
console.log("Method Join with prototype");
Array.prototype.join = ArrayObject.join;
console.log(arrayMethodJoin.join("***"));
var joinString = arrayMethodJoin.join(" * * ");
document.getElementById("join").innerHTML = joinString;

console.log("Method Reverse");
console.log(ArrayObject.reverse.apply(arrayMethodReverse));
console.log("Method Reverse with prototype");
Array.prototype.reverse = ArrayObject.reverse;
console.log(arrayMethodReverse.reverse());
var reversArr = arrayMethodReverse.reverse();
document.getElementById("reverse").innerHTML = reversArr;

console.log("Method Sum");
var x = 9;
console.log(11 .sum(6));
console.log(x.sum(9));
console.log(x.sum("Opps"));
console.log("Method Sum with apply");
console.log(Number.prototype.sum.apply(8, [25]));
document.getElementById("sum").innerHTML = x.sum();