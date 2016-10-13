
// Join method
var colors = ["Green", "Orange", "Blue"];
document.getElementById("join").innerHTML = colors.join(" *** ");

// Shift & Unshift methods
var color = ["Black", "Yellow", "Red"];
color.shift();
color.unshift("Lime");
document.getElementById("shift-unshift").innerHTML = color;

// Splice method
var mainColor = ["Coral", "Aqua", "Gray", "Pink"];
mainColor.splice(1, 2, "Red", "Fuchsia");
document.getElementById("splice").innerHTML = mainColor;

// Concat method
var fruits = ["Apricot", "Cherry", "Grape", "Kiwi"];
var vegetables = ["Broccoli", "Carrot", "Pea", "Tomato"];
var food = fruits.concat(vegetables);
document.getElementById("concat").innerHTML = food;