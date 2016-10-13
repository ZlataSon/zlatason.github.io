
// Join method
var colors = ["Green", "Orange", "Blue"];
document.getElementById("join").innerHTML = colors.join(" * ");

// Join method
var color = ["Black", "Yellow", "Orange"];
color.shift();
color.unshift("Lime");
document.getElementById("shift-unshift").innerHTML = color.toString();