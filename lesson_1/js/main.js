
// Join method
var colors = ["Green", "Orange", "Blue"];
document.getElementById("join").innerHTML = colors.join(" *** ");

// Shift & Unshift methods
var color = ["Black", "Yellow", "Orange"];
color.shift();
color.unshift("Lime");
document.getElementById("shift-unshift").innerHTML = color.toString();