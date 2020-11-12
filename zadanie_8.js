//Задание 8.

//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, 
//значение — Y».

//Используйте шаблонные строки.

let myMap = new Map();
myMap.set(43, 'right');
myMap.set('two', 'left');
myMap.set(false, 'down');
myMap.set(true, 'top');

let nameArr = myMap.keys();

for(let k of nameArr) {
let value = myMap.get(k);
console.log('Ключ ' + k + ', значение ' + value);
}