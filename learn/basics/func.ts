// a simple function to add two numbers
function add(x: number, y: number){
    return x + y;
}

console.log(add(5, 7));

// nested functions
function AddSquares(a: number, b: number)
{
    function Squares(x: number)
    {
        return x ** 2;
    }

    return Squares(a) + Squares(b);
}

console.log(AddSquares(3, 4));