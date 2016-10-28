
function factorial(n)
{
    var z = 1;
    for (i = 1; i <= n; i++) z = z * i;
    return (z);
}

console.log("Factorial without Recursion");
console.log(factorial(10));