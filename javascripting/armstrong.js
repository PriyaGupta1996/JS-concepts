const prompt = require('prompt-sync')()
const N = prompt("Enter the value:-- ");
let result = []
for (let i = 1; i < N; i++) {
    const numberOfDigit = i.toString().length
    let sum = calculate(i, numberOfDigit)
    if (sum === i) {
        result.push(i)
    }


}
console.log(result)

function calculate(n, power) {
    let sum = 0;
    let temp = n;
    while (temp > 0) {
        let remainder = parseInt(temp % 10)
        sum = sum + (remainder ** power)
        temp = parseInt(temp / 10)
    }
    return sum
}