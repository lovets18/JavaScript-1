class Product {
    name
    price
    constructor() {
        this.name = prompt('Введите название товара: ')
        this.price = Math.floor(Math.random() * 100)
    }
    Print() {
        return 'Название товара: ' + this.name + '. Цена: ' + this.price
    }
}

const arr = []
const catalog = document.querySelector('.catalog')
catalog.style.textAlign = 'center'
catalog.style.fontSize = '22px'
catalog.style.fontWeight = 'bold'
catalog.style.fontFamily = 'Sans-Serif'
const n = parseInt(prompt('Введите количество товаров: '), 10)
for (let i = 0; i < n; ++i) {
    arr.push(new Product())
    const good = document.createElement('p')
    good.innerHTML = arr[i].Print()
    catalog.appendChild(good)
}