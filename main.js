function countBasketPrice(a) {
    let result = a.reduce(function(sum, current) {

        return sum + current.price
      }, 0);
      return result
}

let Ball = {
    name: 'мяч',
    price: 0,
    size: 0,
    color: 'white',
}
let Sneakers = {
    name: 'кроссовки',
    price: 0,
    size: 0,
    color: 'black',
}
let Phone = {
    name: 'телефон',
    price: 0,
    model: undefined,
    color: 'black',
    call: function (name) {
        console.log('Calling ' + name)
    } 
}
let arr = [], temp = [Ball, Sneakers, Phone]
alert('В данный момент в нашем интернет магазине доступны только 3 товара: мяч, кросовки и телефон.\nВам будет предложено добавить их в корзину по Вашему усмотрению.')
for (let i = 0; i<3; ++i){
    const choice = prompt('Добавить ' + temp[i].name + ' в Вашу корзину? (Да/Нет, +/-, Yes/No)')
    if ((choice === '+') || (choice === 'Yes') || (choice === 'Да')) {
        switch (i) {
            case 0:
                arr.push(Ball)
                break
            case 1:
                arr.push(Sneakers)
                break
            case 2:
                arr.push(Phone)
                break
        }
    }
}

arr.forEach(function(item, i, arr) {
    item.price = (Math.floor(Math.random() * 10))
  });

// for (let i = 0; i < arr.length; ++i) {
//     arr[i].price = (Math.floor(Math.random() * 10))
// }
console.log(arr)

let basket = document.querySelector('.basket')
if (arr.length) {
    const str = document.createElement('h1')
    str.innerHTML = 'В корзине: ' + arr.length + ' товаров на сумму ' + countBasketPrice(arr) + ' рублей.'
    basket.appendChild(str)
}
else {
    basket.innerHTML = '<h1>Корзина пуста</h1>'
}