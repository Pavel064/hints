
//              // ОПЕРАТОРЫ

// let a, b

// a = 10
// b = a
// let c = a + b

// console.log(c); // 20


// //     // УНАРНЫЕ ОПЕРАТОРЫ

// a++
// +a
// delete obj.a
// typeof a
// new Object()


//         // БИНАРНЫЕ ОПЕРАТОРЫ

// a = 5 присваивание
// a + b сложение
// a += 5 увеличение значения (берём значение а, увеличиваем на 5 и присваиваем результарующее значение переменной а)
// a === b сравнение как типа, так и значения
// a && b логический


//             // ИНФИКСНАЯ ЗАПИСЬ (оператор находится между операндами)

// a = true 
// a + b
// a += 5 
// a || b
// a > b 


//             // ПРЕФИКСНАЯ ЗАПИСЬ

// ++a
// delete obj.a
// typeof a


//             // ПОСТФИКСНАЯ ЗАПИСЬ

// a++
// myFunction()

//             // ПРИОРИТЕТНОСТЬ ОПЕРАТОРОВ

// a + b * c / d - e 

// a + ((b * c) / (d - e)) 

// (((a + b) * c) / d) - e 


//             // ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// let isUndefined

// typeof isUndefined === 'undefined' // true
// если не знаем, есть ли значение у переменной, можем использовать
// оператор сравнения и оператор typeof, чтобы проверить значение переменной


//             //  ПРИМЕРЫ С ОПЕРАТОРОМ !

// !10 // false
// !0  // true ноль - это ложное значение
// !'abc' //false
// !''     // true пустая строка - это ложное значение
// !true // false
// !undefined // true

// //             // ОТРИЦАНИЕ ОТРИЦАНИЯ !!

// !!10    // true
// !!0     // false
// !!'abc' // true
// !!''    // false
// !!true  // true
// !!undefined // false

// const clearObject = {}
// !!clearObject // true


//             // ОПЕРАТОРЫ && И || ЯВЛЯЮТСЯ ОПЕРАТОРАМИ
//             // КОРОТКОГО ЗАМЫКАНИЯ

//             'Pavel' || 'Sacha' // 'Pavel'
//             'null' || 'Sacha' // 'null'
//             null || 'Sacha' // 'Sacha'
//             2 || 'Sacha' // 2
//             undefined || 'Sacha' // 'Sacha'
//             false || 'Sacha' // 'Sacha'
//             '' || 'Sacha' // 'Sacha'
//             0 || 'Sacha' // 'Sacha'


//             'Pavel' && 'Sacha' // 'Sacha'
//             'Pavel' && '' // ''
//             '' && 'Sacha' // ''
//             'Pavel' && undefined // undefined
//             undefined && 'Sacha' // undefined

// let b = 
// // undefined

// b && console.log('Выполнено!');
// // Выполнено!
// // undefined

// let c 
// // undefined

// c && console.log('Выполнено!');
// // undefined

//             // ЦЕПОЧКА ОПЕРАТОРОВ && И ||


// a && b && c && d // задача оператора - найти первое ложное выражение

// a || b || c || d // задача оператора - найти первое истинное выражение


//             // ОПЕРАТОР РАЗДЕЛЕНИЯ НА СВОЙСТВА

// const button = { // основа объекта redButton
//     width: 200,
//     text: 'Buy'
// }

// const redButton = {
//     ...button,      // разделяем объект button на свойства
//     color: 'red'    // добавляем новое свойство
// }

// console.table(redButton);

//             // ОБЪЕДИНЕНИЕ ОБЪЕКТОВ С ПОМОЩЬЮ ...
// // пример
// const buttonInfo = {
//     text: 'Buy'
// }

// const buttonStyle = {
//     color: 'yellow', 
//     width: 200,
//     height: 300
// }

// const button = {
//     ...buttonInfo,
//     ...buttonStyle
// }

// console.table(button);


//             // КОНКАТЕНАЦИЯ СТРОК
//         // ОПЕРАТОР + ДЛЯ КОНКАТЕНАЦИИ СТРОК

// 'Hello ' + 'Tbilisi'

//         // ПЕРЕМЕННЫЕ В КОНКАТЕНАЦИИ СТРОК

// const hello = 'Hello'
// const tbilisi = 'Tbilisi'

// const privetstvie = hello + ' ' + tbilisi
// console.log(privetstvie);


//             // ШАБЛОННЫЕ СТРОКИ


// const hello = 'Hello'
// const tbilisi = 'Tbilisi'
            
// const privetstvie = `${hello} ${tbilisi}`
// console.log(privetstvie);


// const name = 'Paul'
// const city = 'Tbilisi'

// const ex = ` Меня зовут ${name} и я живу в городе ${city} `

// console.log(ex);


//             // ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ

// function myFn(a, b) {   // ОБЪЯВЛЕННАЯ ФУНКЦИЯ
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// function(a, b) {        // ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ
//     let c               // отсутствует имя функции
//     a = a + 1
//     c = a + b
//     return c
// }


//         // ПРИСВАИВАНИЕ ФУНКЦИОНАЛЬНОГО ВЫРАЖЕНИЯ ПЕРЕМЕННОЙ

// const myFunction = function(a, b) {     // создаём пременную, присваиваем ей значение функционального выражения
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
//  myFunction(5, 3) // 9


//         // ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ В ВЫЗОВЕ ДРУГОЙ ФУНКЦИИ

// setTimeout(function() {
//     console.log('Отложенное сообщение');
// }, 1000)

// // 'Отложенное сообщение' будет выведено в консоль через 1000 мс (1 сек)


//             // СТРЕЛОЧНЫЕ ФУНКЦИИ

// (a, b) => {     // нет имени
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

//     // как дать имя стрелочной функции?

// const myFn = (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// myFn(5, 3) // 9


//     // СТРЕЛОЧНАЯ ФУНКЦИЯ В ВЫЗОВЕ ДРУГОЙ ФУНКЦИИ

// setTimeout(() => {
//     console.log('Отложенное сообщение');
// }, 1000)
// // 'Отложенное сообщение' будет выведено в консоль через 1000 мс (1 сек)
 

//         // СОКРАЩЕНИЯ В СТРЕЛОЧНЫХ ФУНКЦИЯХ

// a => {      // если один параметр, то круглые скобки можно опустить
//     // тело функции
// }


// (a, b) => a + b // фигурные скобки можно опустить, если тело ф-ции состоит из одного выражения


            // ЗНАЧЕНИЯ ПАРАМЕТРОВ ФУНКЦИИ ПО УМОЛЧАНИЮ

// пример 1
// function multiByFactor(value, multiplier = 1) { // присваиваем дефолтное значение параметру multiplier 
//     return value * multiplier   // если значения параметра multiplier не будет в вызове ф-ции, 
// }                               // то ему будет присвоено значение 1

// multiByFactor(10, 2) // 20
// multiByFactor(5) // 5

// ЗАДАЧИ:
// - создать такую же функцию самостоятельно
// - переписать эту ф-цию, используя синтаксис  анонимных функциональных выражений; 
// - переписать эту ф-цию, исп-я стрелочную ф-цию

// function sumString(string1, string2 = ' Mari') {
//     return string1 + string2
// }

// sumString('Pavel') // 'Pavel Mari'
// sumString('Pavel', 'PS5') // 'PavelPS5'

// const multiByFactor = function(value, multiplier = 1) {
//     return value * multiplier
// }

// multiByFactor(10, 2)    // 20
// multiByFactor(5)        // 5


// const multiByFactor = (value, multiplier = 1) => {
//     return value * multiplier
// }

// multiByFactor(10, 2)    // 20
// multiByFactor(5)        // 5


// пример 2

// const newPost = (post, addedAt = Date()) => ({  // создаем стрелочную ф-цию и присваиваем её результат переменной newPost
//     ...post,    // задача: хотим взять оригинал post и добавить ему новое свойство addedAt; это св-во должно указывать дату вызова ф-ции newPost
//     addedAt     // здесь неявный возврат объекта из функции. Если не поместить тело ф-ции в (), то интерпритатор JS
// })              // подумает, что здесь начинается тело ф-ции, а не объект, но мы хотим вернуть объект.

// const firstPost = {
//     id: 1,
//     author: 'Paul'
// }

// const result = newPost(firstPost)   // присваиваем значение выполняемой ф-ции новой переменной result, чтобы вывести объект в консоль

// console.log(result);


// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt 
// })  
// const firstPost = {
//     id: 1,
//     author: 'Paul'
// }
// newPost(firstPost) // результат только в браузере

// задание: переписать эту ф-цию, с явным возвратом объекта


