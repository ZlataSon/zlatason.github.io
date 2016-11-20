// TASK 1. TodoList
console.log("***TASK 1. TodoList***");

var status = "Add",
    el = null;
// var status = "Edit";

function create() {
    var input = document.getElementsByName("title") [0];

    if (input.value) {
        if (status == "Add") {
            var li = document.createElement("li");
            var t = document.createTextNode(input.value);
            li.appendChild(t);
            li.onclick = click;
            input.value = "";
            var ul = document.getElementById("todo");
            ul.appendChild(li);
            document.getElementById("alert").innerHTML = "";
            var span = document.createElement("span");
            span.className = "done";
            span.innerText = "Not done";
            li.appendChild(span);
            span.onclick = checked;
        }
        else if (status == "Edit") {
            el.firstChild.nodeValue = input.value;
            input.value = "";
            status = "Add";
            el.classList.remove("edit");
            document.getElementById("btn-change").innerText = status;
         }

    }
    else {
        document.getElementById("alert").innerHTML = "You must write something!";
    }
}

function remove() {
    var ul = document.getElementById("todo");
    ul.removeChild(ul.lastChild);
}

function click(event) {
    el = event.toElement;
    if (el.tagName == "SPAN") {return}
    [].forEach.call(el.parentElement.children, function (el) {
        el.classList.remove("edit");
    });

    el.classList.add("edit");
    var input = document.getElementsByName("title") [0];

    input.value = el.firstChild.textContent;
    status = "Edit";
    document.getElementById("btn-change").innerText = status;
}

function checked() {
    if (this.innerText == "Done") {
        console.dir(this);
        this.innerText = "Not done";
        this.parentElement.className = "checkedNot";
        this.parentElement.onclick = click;
    }
    else {
        this.innerText = "Done";
        this.parentElement.className = "checked";
        this.parentElement.onclick = null;
    }
}

function archive() {
    var items = document.getElementsByClassName("checked");
    for (var item of items) {
        console.dir(item);
        var text = "";
        text = item.firstChild.textContent;
        var li = document.createElement("li");
        var t = document.createTextNode(text);
        li.appendChild(t);
        var ul = document.getElementById("archive-list");
        ul.appendChild(li);
    }
    for (var i = items.length - 1; i >= 0; i--) {
        var ulOther = document.getElementById("todo");
        ulOther.removeChild(items[i]);
    }

}

function sortList() {
    var todo = document.getElementById("todo");
    var elems = todo.children;
    elems = Array.prototype.slice.call(elems); // теперь elems - массив
    console.dir(elems);

    function alphabetical(a, b) {
        var A = a.firstChild.nodeValue;
        var B = b.firstChild.nodeValue;
        if (A < B) {
            return -1;
        } else if (A > B){
            return  1;
        }else{
            return 0;
        }
    }
    elems.sort(alphabetical);

    while (todo.firstChild) {
        todo.removeChild(todo.firstChild);
    }
    elems.forEach(function(elem) {
        todo.appendChild(elem);
    });
}

// TASK 2. Water algorithm
console.log("***TASK 2. Water algorithm***");

function findWater(arr, n) {
    var water = 0,
        left = [],
        right = [];

    left[0] = arr[0];
    for (var i = 1; i < n; i++)
        left[i] = Math.max(left[i - 1], arr[i]);

    right[n - 1] = arr[n - 1];
    for (var z = n - 2; z >= 0; z--)
        right[z] = Math.max(right[z + 1], arr[z]);

    for (var v = 0; v < n; v++)
        water += Math.min(left[v], right[v]) - arr[v];

    console.log(left, right);
    console.log(arr);

    return water;
}

var rockHeight = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
var n = rockHeight.length;
console.log("Maximum water that can be accumulated is " + findWater(rockHeight, n));
document.getElementById("water").innerHTML = findWater(rockHeight, n);

var magic = findWater(rockHeight, n);
for (var d = 1; d <= magic; d++) {
    var i = document.createElement("i");
    i.className = "fa fa-tint water";
    i.innerText = " ";
    document.getElementById("tint").appendChild(i);
}




