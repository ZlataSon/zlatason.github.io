// TASK 1. TodoList

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
    if (el.tagName == "SPAN") {return};
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

// TASK 2. Algoritm water
