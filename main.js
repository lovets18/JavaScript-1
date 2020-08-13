function countBasketPrice(a) {
    let result = a.reduce(function(sum, current) {

        return sum + current.price
      }, 0);
      return result
}

function buy(event) {
    event.preventDefault()
    alert('succes!')
}

function render() {
    basket.innerHTML = '<h1>Корзина покупок</h1>'
    const totalPrice = document.createElement('p')
    basket.appendChild(totalPrice)
    totalPrice.innerHTML = 'Ваша корзина пока пуста!'

    arr.forEach(function(item, i, arr) {
        const temp = document.createElement('div')
        const ph = document.createElement('img')
        const info_name = document.createElement('p')
        const info_price = document.createElement('p')
        const info_number = document.createElement('p')
        const info_number_text = document.createElement('span')
        const btn_min = document.createElement('button')
        const btn_plus = document.createElement('button')


        temp.classList.add(classNames[i])
        totalPrice.classList.add('total-price')
        ph.classList.add('img-b')
        btn_min.classList.add('btn-change')
        btn_plus.classList.add('btn-change')
        temp.classList.add('hide')
        
        
        basket.appendChild(temp)
        temp.appendChild(ph)
        temp.appendChild(info_name)
        temp.appendChild(info_price)
        temp.appendChild(info_number)
        info_number.appendChild(info_number_text)
        info_number.appendChild(btn_min)
        info_number.appendChild(btn_plus)
        

        ph.src = images[i]
        info_name.innerHTML = 'Название: ' + arr[i].name
        info_price.innerHTML = 'Цена: ' + item.price + '$'
        info_number_text.innerHTML = 'Количество: ' + count[i]
        btn_min.innerHTML = '-'
        btn_plus.innerHTML = '+'
        
        
        btn_min.addEventListener('click', function (event) {
            event.preventDefault()
            --count[i]
            rerender(i, '.'+ classNames[i])
        
            //console.log(this)
        })
        btn_plus.addEventListener('click', function (event) {
            event.preventDefault()
            ++count[i]
            rerender(i, '.'+ classNames[i])
        
            //console.log(this)
        })
    },)
}

function rerender(i, str) {
    const temp = basket.querySelector(str)
    const buf = temp.querySelectorAll('p')
    const buf_txt = buf[2].querySelector('span')
    buf_txt.innerHTML = 'Количество: ' + count[i]
    if (count[i]){
        temp.classList.remove('hide')
    }
    else {
        temp.classList.add('hide')
    }
    const totalPrice = basket.querySelector('.total-price')
    let sum = 0
    arr.forEach(function(item, j, arr) {
        sum += item.price * count[j]
        console.log(count[j])
    }, )
    if (sum) {
        totalPrice.innerHTML = 'Итого: ' + sum + '$'
    }
    else {
        totalPrice.innerHTML = 'Ваша корзина пока пуста!'
    }
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
//let arr = [], temp = [Ball, Sneakers, Phone]
let arr = [Ball, Sneakers, Phone]
let count = [0, 0, 0]
const images = ['img/ball.jpg', 'img/sneakers.jpg', 'img/phone.jpg']
const classNames = ['ball', 'sneakers', 'phone']
/*alert('В данный момент в нашем интернет магазине доступны только 3 товара: мяч, кросовки и телефон.\nВам будет предложено добавить их в корзину по Вашему усмотрению.')
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
}*/

arr.forEach(function(item, i, arr) {
    item.price = (Math.floor(Math.random() * 1000))
  });

const basket = document.querySelector('.basket')
render()
/*if (arr.length) {
    const str = document.createElement('h1')
    str.innerHTML = 'В корзине: ' + arr.length + ' товаров на сумму ' + countBasketPrice(arr) + ' рублей.'
    basket.appendChild(str)
}
else {
    basket.innerHTML = '<h1>Корзина пуста</h1>'
}*/

const catalog = document.querySelector('.catalog')

arr.forEach(function(one, i, arr) {
    const item1 = document.createElement('div')
    const img1 = document.createElement('img')
    const goodName1 = document.createElement('p')
    const goodPrice = document.createElement('p')
    const buy1 = document.createElement('button')
    img1.src = images[i]
    img1.classList.add('img')
    item1.classList.add('good')
    goodName1.classList.add('name')
    goodName1.innerHTML = one.name
    goodPrice.innerHTML = one.price + '$'
    goodPrice.classList.add('good-price')
    buy1.innerHTML = 'Купить'
    buy1.classList.add('btn-buy')
    catalog.appendChild(item1)
    item1.appendChild(img1)
    item1.appendChild(goodName1)
    item1.appendChild(goodPrice)
    item1.appendChild(buy1)
    buy1.addEventListener('click', function (event) {
        event.preventDefault()
        ++count[i]
        rerender(i, '.' + classNames[i])
        //console.log(this)
    })
    
  });


/*const item1 = document.createElement('div')
const img1 = document.createElement('img')
const goodName1 = document.createElement('p')
const buy1 = document.createElement('button')
img1.src = 'img/ball.jpg'
img1.classList.add('img')
item1.classList.add('good')
goodName1.classList.add('name')
goodName1.innerHTML = Ball.name
buy1.innerHTML = 'Купить'
buy1.classList.add('btn-buy')
catalog.appendChild(item1)
item1.appendChild(img1)
item1.appendChild(goodName1)
item1.appendChild(buy1)
buy1.addEventListener('click', function (event) {
    event.preventDefault()
    ++count[0]
    render(0, '.ball')

    console.log(this)
})

const item2 = document.createElement('div')
const img2 = document.createElement('img')
const goodName2 = document.createElement('p')
const buy2 = document.createElement('button')
img2.src = 'img/sneakers.jpg'
img2.classList.add('img')
item2.classList.add('good')
goodName2.classList.add('name')
goodName2.innerHTML = Sneakers.name
buy2.innerHTML = 'Купить'
buy2.classList.add('btn-buy')
catalog.appendChild(item2)
item2.appendChild(img2)
item2.appendChild(goodName2)
item2.appendChild(buy2)
buy2.addEventListener('click', function (event) {
    event.preventDefault()
    ++count[1]
    render(1, 'sneakers')

    console.log(this)
})

const item3 = document.createElement('div')
const img3 = document.createElement('img')
const goodName3 = document.createElement('p')
const buy3 = document.createElement('button')
img3.src = 'img/phone.jpg'
img3.classList.add('img')
item3.classList.add('good')
goodName3.classList.add('name')
goodName3.innerHTML = Phone.name
buy3.innerHTML = 'Купить'
buy3.classList.add('btn-buy')
catalog.appendChild(item3)
item3.appendChild(img3)
item3.appendChild(goodName3)
item3.appendChild(buy3)
buy3.addEventListener('click', function (event) {
    event.preventDefault()
    ++count[2]
    render(2, 'phone')

    console.log(this)
})*/






