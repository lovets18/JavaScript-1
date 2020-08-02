function countBasketPrice(a) {
    let result = a.reduce(function(sum, current) {

        return sum + current.price
      }, 0);
      return result
}

let Ball = {
    price: 0,
    size: 0,
    color: 'white',
}
let Sneakers = {
    price: 0,
    size: 0,
    color: 'black',
}
let Phone = {
    price: 0,
    model: undefined,
    color: 'black',
    call: function (name) {
        console.log('Calling ' + name)
    } 
}
let arr = [Ball, Sneakers, Phone]
for (let i = 0; i < arr.length; ++i) {
    arr[i].price = (Math.floor(Math.random() * 10))
}

alert('Total price is ' + countBasketPrice(arr))