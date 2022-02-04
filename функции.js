// ФУНКЦИИ
// Функция - блок кода, который можно выполнять многократно

// let a = 5
// let b = 3

// let c

// c = a + b
// console.log(c); // 8

// a = 8
// b = 12

// c = a + b
// console.log(c); // 20

// код повторяется, необходимо оптимизировать запись:

// let a = 5
// let b = 3

// function sum(a, b) {
//     const c = a + b // объявляем переменную внутри функции
//     console.log(c);
// }

// sum(a, b) // 8 вызываем функцию

// a = 8
// b = 12

// sum(a, b) // 20

// Функция - это объект

// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c // результат
// }
// чтобы отобразить свойства объекта, использовать console.dir(myFn)

// Вызов функции

// let myFun = myFn(10, 3) // 14

// console.log(myFun); // 14

// передача значения по ссылке

// const personOne = {
//     name: 'Paul',
//     age: 30
// }

// function increasePersonAge(person) { // функция мутирует внешний объект
//     person.age += 1    // меняем свойство параметра, меняем значение на единицу
//     return person       // возвращаем person
// }

// increasePersonAge(personOne)
// console.log(personAge.age); // 22 передача объекта по ссылке

// СОЗДАНИЕ КОПИИ ОБЪЕКТА

// const personOne = {     // объявляем переменную personOne, присваиваем ей ссылку на обект
//     name: 'Paul',       // свойства объекта с параметрами ключ:значение
//     age: 30
// }
//     // объявляем функцию увеличениеВозрастаЧеловека
// function increasePersonAge(параметр) {       // person - параметр функции
//     const updatedPerson = Object.assign({}, параметр) // создаём новую переменную, присвоиваем ей значение нового объкта и копируем в него свойства объекта person
//     updatedPerson.age += 1  // с помощью точечной записи изменяем свойство на 1
//     return updatedPerson    // возвращаем результат ф-ции
// }

// const updatedPersonOne = increasePersonAge(personOne)   // результат вызова ф-ции
//                                                         // присваиваем новой переменной, он должен где-то храниться!
// console.log(personOne.age); // 30
// console.log(updatedPersonOne.age); // 31

// КОЛБЭК ФУНКЦИИ

// function anotherFunction(params) { // колбэк функция
//     // Действия
// }

// function fnWithCallback(callbackFunction) { // в теле этой функции вызывается колбэк функция
//     callbackFunction()
// }
//     // смысл: функция вызывается внутри другой функции
// fnWithCallback(anotherFunction)

// Пример
// function printMyName() {
//     console.log('Paul');
// }

// console.log('Start');

// setTimeout(printMyName, 2000)   // встроенная функция в JS, метод ГЛОБАЛ
// ф-ция printMyName будет вызвана через 1000 мс

// ПРАВИЛА РАБОТЫ С ФУНКЦИЯМИ

// ОБЛАСТИ ВИДИМОСТИ

// let a               // глобальная область видимости
// let b

// function myFn() {
//     let b           // локальная область видимости функции
//     a = true
//     b = 10
//     console.log(b); // 10
// }

// myFn()

// console.log(a); // true
// console.log(b); // undefined

// ЦЕПОЧКА ОБЛАСТЕЙ ВИДИМОСТИ

// const a = 5     //объявляем переменную и присваиваем ей значение

// function myFn() {       // объявили ф-цию
//     function innerFn() {    // внутри ф-ции объявили ещё ф-цию
//         console.log(a); // 5
//     }
//     innerFn()   // вызываем ф-цию, внутри ф-ции
// }

// myFn()      // вызываем ф-цию
// каждый раз, когда будет вызываться ф-ция myFn, внутри неё будет объявляться новая переменная innerFn,
// и значением её будет ф-ция, которая выводит в консоль значение переменной а

//переменная а
// let a               // 1. объявление в глобальной области видимости.
// let b               // Её значение undefined
//                     // 3. Объявлена ли "а" в зоне видимости ф-ции? НЕТ
// function myFn() {   // Объявлена ли "а" во внешней области видимости? ДА
//     let b           // Присваивание значения true глобальной переменной "а"
//     a = true
//     b = 10
//     console.log(b); // 10
// }

// myFn()              // 2. Вызов myFn

// console.log(a); // true     4. "а" имеет значение true
// console.log(b); // undefined

// let a
// let b

// function myFn() {
//     let a
//     let b
//     a = true
//     b = 10
// }
// myFn()

// console.log(a); // undefined
// console.log(b); // undefined

// let a
// let b

// function myFn() {
//     a = true
//     b = 10
// }
// myFn()

// console.log(a); // true
// console.log(b); // 10

// СТРОГИЙ РЕЖИМ

// 'use strict'    // запрещает использование необъявленных переменных

// function myFn() {
//     a = true // Uncaught ReferenceError: a is not defined
//     console.log(a);
// }

// myFn()

// console.log(a);

// const getURL = (nameBook) => {
//   if (nameBook === 'RUT') {
//     return
//     'https://git.door43.org/ru_gl/ru_rob/raw/branch/master/08-RUT.usfm'
//   }
// }
// getURL('RUT')

let bookURL = "https://git.door43.org/ru_gl/ru_rob/raw/branch/master/08-RUT.usfm";
let nameBook = "RUT";


if (nameBook === "RUT") {
    console.log(bookURL);
}

