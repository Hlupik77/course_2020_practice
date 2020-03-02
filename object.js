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
myFamily['love to walk'] = true;// добавляем свойста из нескольких слов через [...]

let play = 'love to play'; // создал переменную для свойства
myFamily[play] = true; // изменил значение в обьекте 
//let key = prompt('Они любят гулять с семьей ?', "true/false")
//alert(myFamily[play]); // через точку нельзя, вызовет undefined

// Вычисляемые свойства

// let buyCar = prompt("Kalina - good car ?", "do not buy. shit!");

// let car = {
//   [buyCar]: true, // имя свойства будет взято из переменной buyCar
// };

//alert(car["do not buy shit!"]); // true ? если buyCar = "do not buy shit!"

//Свойства переменной

function makeUsers (name, age){
  return{
    name: name, // если  названия свойств совпадают с названиеми переменных, то можем написать вместо name: name просто- name,
    age: age,
  };
}
let user = makeUsers ('Sasha', 29);
console.log(user.name, user.age);

//сокращенно можно так.

let users = {
name, // тоже самое name: name;
age: 42
};



//Ограничения на времена свойств.

let obj = { // свойства обьекта могутназываться зарезервированными словами
  for: 5,
  let: 4,
  return: 7
};

console.log( obj.for + obj.let + obj.return );

//Проверка существования свойства, оператор  in

let chekUndefined = {};//если свойства нет возвращается undefined, можно просто проверить сравнением.

console.log(chekUndefined.noSuchProperty === undefined );

let cat = {
  name: 'Barsik',
  length: 50,
};
console.log ('length' in cat);// true, cat.length - существует. Имя свойства обязательно в кавычках, если без них, то мы укажем переменную
console.log ('blabla' in cat);// false, cat.blabla - не существует


//Цикл for ..... in - используется для перебоки всех свойств обьекта
// Синтаксис for(key in object) {тело цикла выполняется для каждого свойства обьекта}

let dog = {
name: "Bobik",
age: 5,
color: 'white',
cable: true,
};

for (let key in dog) {
console.log(key); // ключи
console.log(dog[key]) // значение ключей

};


for (let prop in myFamily){
console.log(prop);
console.log(myFamily[prop]);
}

