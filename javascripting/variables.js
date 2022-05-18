//LET VAR mutable 
// CONST immutable means can not change

var x = 10;
console.log(x);

let y = 10;
console.log(y)

// console.log(z) can not access z before initialization
// let z = 100; //error

console.log(a)
var a = 1000;


var greeting = "hi"
function test() {
    var greeting = "hello"
}

console.log(greeting) //greeting is function scoped hence the value hello is remained in the function only.

let greet = "hi"
function test() {
    let greet = "hello"
}

console.log(greet)

