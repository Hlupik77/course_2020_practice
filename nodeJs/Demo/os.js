const os = require('os')

console.log('Всего памяти: ', os.platform())

console.log('Архитектура процессора: ', os.arch())

console.log('Информация по процессорам: ', os.cpus())

console.log('Свободная память: ', os.freemem())

console.log('Всего памяти: ', os.totalmem())

console.log('Домашняя директория: ', os.homedir())

console.log('Сколько вклчен: ', os.uptime())