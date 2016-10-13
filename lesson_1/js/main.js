
// Join method
var colors = ["Green", "Orange", "Blue", "Indigo", "Olive", "Purple"];
document.getElementById("join").innerHTML = colors.join(" *** ");

// Shift & Unshift methods
var color = ["Black", "Yellow", "Red", "Silver", "Coral", "Indigo", "Purple"];
color.shift();
color.unshift("Lime", "White");
document.getElementById("shift-unshift").innerHTML = color;

// Splice method
var mainColor = ["Coral", "Blue", "Gray", "Pink", "Violet", "Aqua"];
mainColor.splice(1, 2, "Red", "Fuchsia");
document.getElementById("splice").innerHTML = mainColor;

// Concat method
var fruits = ["Apricot", "Cherry", "Grape", "Kiwi"];
var vegetables = ["Broccoli", "Carrot", "Pea", "Tomato"];
var food = fruits.concat(vegetables);
document.getElementById("concat").innerHTML = food;

// Pop & Push methods
var fruit = ["Banana", "Apricot", "Cherry", "Grape"];
fruit.pop();
fruit.push("Mango");
document.getElementById("pop-push").innerHTML = fruit;

// Sort & Reverse methods
var vegetable = ["Pea", "Tomato", "Broccoli", "Carrot"];
vegetable.sort();
vegetable.reverse();
document.getElementById("sort-reverse").innerHTML = vegetable;

// Slice method
var flower = ["Azalea", "Begonia", "Crocus", "Daisy", "Freesia", "Hibiscus"];
var myFlower = flower.slice(2);
document.getElementById("slice").innerHTML = flower + "<br>" + "<br>" + myFlower;

// Methods valueOf and toString
var flowers = ["Iris", "Lotus", "Orchid"];
document.getElementById("value").innerHTML = flowers.valueOf() + "- valueOf";
document.getElementById("string").innerHTML = flowers.toString() + "- toString";

// Method split
var namesFlower = 'Peony, Roses, Tulip';
var arr = namesFlower.split(', ');
document.getElementById("split").innerHTML = arr;
