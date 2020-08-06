let header = document.querySelector('header')
const title = document.createElement('h1')
title.innerHTML = "Шахматная доска"
header.appendChild(title)
title.style.textAlign = 'center'

const main = document.querySelector('main')
const field = document.createElement('article')

main.appendChild(field)
field.style.margin = '0 auto'
field.style.width = '270px'
for (let i = 1; i<=9; ++i) {
    const line = document.createElement('span')
    line.classList.add('clear')
    for (j = 1; j<=9; ++j) {
        const cell = document.createElement('div')
        cell.classList.add('size')
        if ((i + j) % 2 == 1) {
            cell.classList.add('black')
        }
        line.appendChild(cell)
    }
    field.appendChild(line)
}
const line = document.querySelectorAll('span')
const cell_h = line[0].querySelectorAll('div')
for (let i = 1; i<=8; ++i) {
    cell_h[i].classList.remove('black')
    cell_h[i].innerHTML = i
    cell_h[i].style.textAlign = 'center'
    const cell_v = line[i].querySelector('div')
    cell_v.classList.remove('black')
    cell_v.innerHTML = String.fromCharCode(64 + i)
    cell_v.style.textAlign = 'center'
}


