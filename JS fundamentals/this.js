
function square(num) {
    console.log(this.num)
    console.log(this) //global
}
console.log(this) // Object
console.log(this.square)
console.log(square(9))


/*
If we dont call the function ,
the memory is also not allocated to the function variable in variable environment. 
*/