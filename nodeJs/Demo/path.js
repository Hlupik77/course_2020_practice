const path = require('path')

console.log('Название файла: ', path.basename(__filename));

console.log('Имя деректории: ', path.dirname(__filename));

console.log('Название файла: ', path.basename(__filename));

console.log('Parse: ', path.parse(__filename));

console.log('Parse: ', path.parse(__filename).name);
