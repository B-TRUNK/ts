var fullName = "Abanoub";
var WeekArray = 
[
    "Saturday",
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thurthday", 
    "Friday"
];
var number = 8;

// Simplest Function with a Default Value Parameter
function Cube(x = 3){
    console.log(x**3);
}

// Function for Accessing Objects Elements
function ArrayElements(object)
{
    for(var i = 0; i < object.length; i++)
    console.log(object[i])
}

// Nested Functions
function AddSquares(a, b)
{
    function Square(x)
    {
        return x ** 2;
    }

    return Square(a) + Square(b);
}

// Anonymous Function
const concat = function(firstNmae, lastName)
{
    return ("Full Name: " + firstNmae + lastName);
}

// Factorial Function
const Factorial = function(n)
{
    if (n === 0 || n === 1) {
    return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiplies result by i at each iteration
    }
    return result;
}

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

// let myFunc;
// if (num === 0) {
//   myFunc = function (theObject) {
//     theObject.make = "Toyota";
//   };
// }


// Function Calls


Cube();
ArrayElements(WeekArray);
ArrayElements(fullName);
console.log("Squares = " + AddSquares(3, 4));
console.log(concat("Abanoub", "Boshra"));
console.log("Factorial" + number + " = " + Factorial(number));
console.log(factorial(3));

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers)

