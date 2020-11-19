// Задание 7.
//
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например,
// знаки, null и так далее.


let arr = ['a', 1, 3, null, 5, 2, 4, [], 6, 0, 0, NaN];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

function isZero(val) {
return val === 0;
}

function isEvenNumber(val) {
return val % 2 == 0;
}

function isOddEvenNumber(val) {
return val % 2 != 0;
}

for (let i=0; i<arr.length; i++) {
    let currElem = arr[i];
    if (typeof currElem != 'number' || isNaN(currElem)) {
    continue;
    }

    if (isZero (currElem)) {
    zeroCount++;
    } else if (isEvenNumber(currElem)) { // четный
    evenCount++;
    } else if (isOddEvenNumber(currElem)) { // нечетный
    oddCount++;
    }
}

console.log('zeroCount: ' + zeroCount);
console.log('evenCount: ' + evenCount);
console.log('oddCount: ' + oddCount);

// Почти правильно, но не учтено значение NaN. Оно тоже имеет тип number, поэтому пройдет проверку на typeof, но при этом NaN не является числом, поэтому его нельзя учитывать при подсчете четных\нечетных и нулей. Добавила выше проверку на NaN.