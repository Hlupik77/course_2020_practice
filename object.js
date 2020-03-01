let myFamily = { // обьект myFamily
    husband: 'Sasha', // key "husband " , value (значение) Sasha - вместе - это свойства обьекта
    wife: 'Lena',
    daudhter: 'Ksusha',
    quantity: 3,
    car: false,
    "love to play": false  // если имя свойства состоит из нескольких слов, заключаем в "..." вызываем [...]

};

console.log(myFamily);
delete myFamily.car; // Для удаления свойства используем оператор delete

console.log(myFamily);

console.log(myFamily['love to play']); // доступ к свойству из нескольких слов через [...]
myFamily['love to walk'] = true ;// добавляем свойста из нескольких слов через [...]

let  play = 'love to play'; // создал переменную для свойства
myFamily[play] = true; // изменил значение в обьекте 
//let key = prompt('Они любят гулять с семьей ?', "true/false")
//alert(myFamily[play]); // через точку нельзя, вызовет undefined

// Вычисляемые свойства

let buyCar = prompt("Kalina - хорошая машина ?", "не покупай. shit!");

let  car = {
  [buyCar]: true, // имя свойства будет взято из переменной buyCar
};

alert( car["не покупай. shit!"]); // true ? если buyCar = "не покупай shit!"









