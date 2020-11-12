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