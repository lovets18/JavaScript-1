let i = 0
console.log('Task 1, digits from 0 to 100: ')
while (i <=100) {
    console.log(i++)
}

console.log('\nTask 4.1, digits from 0 to 9: ')
for (i = 0; i<10; console.log(i++)) {}

console.log('\nTask 4.2, pyramid: ')
for (i = 1; i <= 20; ++i) {
    let str = ''
    for (let j = 0; j < i; ++j) {
        str += 'x'
    }
    console.log(i + ')' + str)
}

