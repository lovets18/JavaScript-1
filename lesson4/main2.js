const n = parseInt(prompt('Enter number from 0 to 999'), 10)
function getObject(num) {
    const number = {}
    if ((num>=0) && (num <= 999)) {
        number.units = num % 10
        number.tens = Math.floor((num % 100) / 10)
        number.hundreds = Math.floor(num / 100)
    }
    return number
}
console.log(getObject(n))