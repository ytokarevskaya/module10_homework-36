// Задание 6.
//
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве
// одинаковые.

var hasDuplicates = function(array) {
    return array.some(function(value) {                            
       return array.indexOf(value) !== array.lastIndexOf(value);   
  })
}

console.log(hasDuplicates([1,2,3,4,8,7]));

// Вы не совсем правильно поняли задание. Нужно было проверять не наличие дупликатов, а все ли элементы в массиве одинаковые. Ниже написала правильный вариант решения

let array = [2, 1, 2, 2];

let isEqual = true;

for (let i = 1; i < array.length; i++) {
    if (array[0] !== array[i]) {
        isEqual = false;
        break;
    }
}

console.log(isEqual);