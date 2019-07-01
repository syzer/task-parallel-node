const farmhash = require('farmhash')

console.time('cpu')
const hash = farmhash.hash32('test')
// console.log(typeof hash1) // 'number'

const hash2 = farmhash.hash64(Buffer.from('test'))
// console.log(typeof hash2) // 'string'

const hash3 = farmhash.hash64WithSeed('test', 123)
// console.log(typeof hash3) // 'string'

const hash4 = farmhash.fingerprint32(Buffer.from('test'))
// console.log(typeof hash4) // 'number'

const hash5 = farmhash.fingerprint64('test')
// console.log(typeof hash5) // 'string'

const arr = []

for(let i = 0; i < 1000000; i++) {
  arr.push(farmhash.fingerprint64('test'))
}
console.log(arr[1000])
console.timeEnd('cpu')
// cpu: 636.210ms

