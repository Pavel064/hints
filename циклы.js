            // ЦИКЛЫ

// Без циклов
let i = 0
console.log(i)  // 0 повторяющиеся действия
i++
console.log(i)  // 1 повторяющиеся действия
i++
console.log(i)  // 2 повторяющиеся действия
i++
console.log(i)  // 3 повторяющиеся действия
i++

// перебор всех элементов массива без цикла

const myArray = [true, 'abc', 10]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])

// перебор всех свойств объекта без цикла

const myObject = {
    x: 10,
    y: true,
    q: 'abc'
}

console.log(myObject.x)
console.log(myObject.y)
console.log(myObject.q)


        // ЦИКЛ FOR
    // все циклы это инструкции


for ( Начальная инструкция; Условие; Итерационное действие ) {
    // Блок кода, выполняемый на каждой итерации
}

// for - зарезервированное слово, с него начинается цикл
// () - три исходные инструкции

// Пример цикла FOR
for ( let i = 0; i < 5; i++ ) {     // начинаем цикл со слова фор, прописываем три инструкции-выражения
    console.log(i); // 0 1 2 3 4 выводим результат действий цикла в консоль
}

// начинается цикл тем, что мы объявляем переменную i и даём ей начальное значение 0
// далее 0 сравниваем с цифрой 5 (условие i меньше 5), условие правдиво, значит выводим в консоль значение i. Итерация закончена
// после первой итерации увеличиваем значение i на единицу (выполнчется третья инструкция) 
// на последней итерации, увеличиваем значение i на единицу (i=5), смотрим на условие и видим, что i уже не меньше пяти,
// значит условие ложно. Выходим из цикла
// ЦИКЛЫ МОЖНО ИСПОЛЬЗОВАТЬ ДЛЯ МАССИВОВ, но не рекомендуется. Необходимо использовать функции высшего порядка массивов - forEach, map, reduce

// Пример: цикл for для массивов
const myArray = [ 'first', 'second', 'third' ]

for ( let i = 0; i < myArray.length; i++ ) {
    console.log(myArray[i]);    // first second third
}
// метод forEach
myArray.forEach( (element, index) => {
    console.log(element, index);    // first 0
                                    // second 1
                                    // third 2
} )
// метод forEach - получаем доступ к непосредственно элементам массива и к их индексу. 
// метод вызывается используя точечную запись. В его вызове указываем колбэк ф-цию, которая вызывается столько раз, сколько элементов в массиве.
// второй параметр вызова ф-ции опционален (index)


        // ЦИКЛ WHILE
    // позволяет выполнять блок кода, пока условие правдиво


while (Условие) {
    // Блок кода, выполняемый на каждой итерации
}
// если условие ложно, то блок инструкций не выполнится ни разу.
// если условие бесконечно правдиво, то выбраться из цикла невозможно

// Пример
let i = 0 
while (i < 5) {     // если условие правдиво, то заходим в блок и выполняем инструкции
    console.log(i)  // выводим значение i в консоль
    i++             // увеличиваем i на единицу
}

// Пример бесконечного цикла
while (i < 5) {
    console.log(i); // 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
}


        // ЦИКЛ DO WHILE
    // выполнится, как минимум, один раз



do {
    // Блок кода, выполняемый на каждой итерации
} while (Условие)

// Пример
let i = 10

do {
    console.log(i)
    i++
} while (i < 5)
// если i присвоим значение 10, то сначала выведем 10 в консоль, а затем 10 проходит проверку и выходит из цикла
// если условие ложно, всё-равно блок кода выполнится один раз


        // ЦИКЛ FOR IN


for (key in Object) {
    // Действия с каждым свойством объекта
    // Значения свойства - Object [key]
}
 // key - название переменной; Object - это объект
 // с помощью инструкции FOR IN можно выполнять разные действия с каждым свойством объекта
 // используя такой цикл, можно перебрать все свойства объекта

 const myObject = {
    x: 10,
    y: true,
    q: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])     // x 10
                                        // y true
                                        //q abc
}

// объявляем переменную key в цикле фор, в блоке печатаем в консоли и key и myObject[key]
// myObject[key] - даёт нам значение того, или иного свойства по ключу


// Пример FOREACH для объектов
const myObject = {
        x: 10,
        y: true,
        q: 'abc'
    }

    Object.keys(myObject).forEach(key => {
        console.log(key, myObject[key]);
    })
// с помощью  вызова метода .keys переменной Object, можно получить все ключи
// определённого объекта, в виде массива свойств. Дальше, используя FOREACH
// можем перебрать элементы этого массива

// Пример FOREACH для объектов (перебираем сразу значения свойств объекта)
const myObject = {
            x: 10,
            y: true,
            q: 'abc'
        }
Object.values(myObject).forEach(value => {
    console.log(value)  // 10
                        // true
                        // abc
})



// Работа в консоли:

// если нужны названия свойств массива:
// Object
// Object()
// Object.keys({}) - возвращает пустой массив
// Object.keys({name:'Pavel'}) - возвращает массив с одним элементом ['name']
// Object.keys({name:'Pavel', student:true}) - возвращает массив с двумя элементами (2) ['name', 'student']
// теперь можем перебрать елементы массива, исп-я FOREACH и выполнить определённые действия с каждым из этих элементов

// если надо получить массив значений объекта:
// Object.values({}) - выводит пустой массив []
// Object.values({name:'Pavel'}) - возвращает ['Pavel'] значение свойства
//  


            // FOR IN ДЛЯ МАССИВОВ


const myArray = [ true, 10, 'abc', null ]

for ( const key in myArray ) {
    console.log( myArray[key] );
}
// объявляем переменную key, на каждой итерации в этом цикле будет создаваться
// новая переменная key (const об этом говорит) 
// используя синтаксис myArray[key], где key это переменная, можно получать доступ
// к элементам массива, исп-я индекс 0, 1, 2, 3 и потому, в рез-те вып-я этого кода
// в консоли видим true 10 abc null
// ТАК ДЕЛАТЬ НЕ РЕКОМЕНДУЕТСЯ!!!


        // ЦИКЛ FOR OF
    

for (Element of Iterable) {
    // Действия с определённым элементом
}

// Iterable - любое значение, либо переменная, которая содержит значение,
// по которому можно итерироваться; элементы которого можно перебирать
// например, в любой строке можно перебирать символ
// элемент будет представлять в таком случае символ в конкретной строке
// это будет переменная, которая будет доступна внутри каждой итерации в цикле

// Пример: FOR OF ДЛЯ СТРОК
const myString = 'Hey'

for (const letter of myString) {
    console.log(letter);    // H
                            // e
                            // y
}


// Пример 2: FOR OF ДЛЯ МАССИВОВ
const myArray = [ true, 10, 'abc', null ]

for (const element of myArray) {
    console.log(element)
}


        // FOR OF НЕ ДЛЯ ОБЪЕКТОВ


let myObject = {
        x: 10,
        y: true,
        q: 'abc'
    }

for (const prop of myObject) {
    console.log(prop);
}
