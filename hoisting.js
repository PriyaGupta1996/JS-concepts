let x
console.log("x:", x)
x = add(2, 3);
console.log("x afterwards", x)

function add(a, b) {
    console.log("inside the add function");
    return a + b

}

