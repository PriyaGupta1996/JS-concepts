console.log(v)
//console.log(b)

var v = 123; // it does not move the decalration but only the definition. , undefined
//let b = 123; // error

console.log(test)
test()

function test() {
    console.log(v)
    const v = 100; // it does hoist the let nd const but will put it in temporal dead zone hence we wont be able to access it. 

}

