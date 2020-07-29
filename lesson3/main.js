function countBasketPrice(a) {
    let result = a.reduce(function(sum, current) {
        return sum + current
      });
      return result
}

let arr = []
n = parseInt(prompt('Enter the number of goods'), 10)
for (let i = 0; i < n; ++i) {
    arr.push(Math.floor(Math.random() * 10))
}
//console.log(arr)
alert('Total price is ' + countBasketPrice(arr))