const execa = require('execa')
const cpu = () =>
  execa('node', ['cpu.intensive.js'])

console.time('All tasks')
Promise.all(Array.from({length: 40}).map(cpu))
  .then(console.log)
  .catch(console.error)

cpu()
  .then(console.log)
  .then(() =>
    console.timeEnd('All tasks'))

// 1802.468ms 4 tasks = 407.7 ms per task
// 16308.145ms 40 tasks = 450.5 ms per task
