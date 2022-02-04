// ASYNC/AWAIT - СПЕЦИАЛЬНЫЙ СИНТАКСИС ДЛЯ УПРОЩЕНИЯ РАБОТЫ С ПРОМИСАМИ

    // АСИНХРОННАЯ ФУНКЦИЯ

async function asyncFn() {  // Используем традиционное объявление ф-ции
    // Всегда возвращает Промис
}

const asyncFn = async () => {
    // Всегда возвращает Промис
}


/* Это ф-ция, которая вместо какого-либо значения (undefined, строка, число) возвращает Промис
Чтобы создать асинхронную ф-цию, необходимо добавить ключевое слово async
*/

// Пример: создаём промис неявно
const asyncFn = async () => {
    return 'Sucsess!'
}

asyncFn()

/* В качестве результата этого промиса, в ф-цию resolve будет передана строка Sucsess!
но сначала, asyncFn вернёт обязательно Промис. Потом этот промис можно либо ИСПОЛНИТЬ, либо ОТКЛОНИТЬ
в данном примере промис будет всегда исполнен, т.к. мы возвращаем результат.
Промис автоматически возвращается из любойй асинхронной ф-ции JS
*/

// Пример: добавляем вызов метода then и catch
const asyncFn = async () => {
    return 'Sucsess!'
}

asyncFn()
  .then(value => console.log(value))


// Пример 2: АСИНХРОННАЯ Ф-ЦИЯ ВОЗВРАЩАЕТ ОШИБКУ

const asyncFn = async () => {
    throw new Error('There was an error!')
}

asyncFn()
.then(value => console.log(value))
.catch(error => console.log(error.message))

/*
В данном случае, промис будет ОТКЛОНЁН, но ф-ция asyncFn вернёт промис, как и ранее
и он будет мгновенно отклонён с ошибкой. Чтобы корректно обработать такую ошибку,
нужно поймать её, используя метод catch. 
После вызова ф-ции, добавляем методы then(если промис был успешно исполнен) и catch (если промис вернул ошибку)
*/

        // AWAIT

/*
В асинхронных ф-циях можно использовать ключевое слово await, с помощью которого
можно ожидать результат другого промиса, тем самым можно выполнять какие-то 
асинхронные действия внутри асинхронной ф-ции, ожидать какого-то результата.
await можно использовать только в асинхронных ф-циях.
await может быть не один внутри ф-ции; можно сначала ожидать одного результата,
потом другого, затем третьего; и к вонце, вернуть какой-то результат всей этой асинхронной ф-ции
*/

// Пример: ОЖИДАНИЕ РЕЗУЛЬТАТА AWAIT
const timerPromise = () =>              // неявный возврат объекта Promise
    new Promise( ( resolve, reject ) => // вызываем setTimeout
        setTimeout( () => resolve(), 2000 ) ) // в вызов ф-ции setTimeout передаём тоже колбэк ф-цию, в которой вызываем ф-цию resolve
    // Промис станет исполненным через 2 секунды. Он создастся, ф-ция timerPromise его вернёт
    // он будет в состоянии ожидания и будет ожидать, пока не пройдёт 2 сек. Затем мы вызовем ф-цию resolve без каких-то данных,
    // но мы исполняем промис. Дальше мы можем использовать ф-цию timerPromise ниже:
const asyncFn = async () => {
    console.log('Timer stars')
    await timerPromise()
    console.log('Timer ended')
}
asyncFn()

/*
Создаём ф-цию asyncFn, помечаем её, как асинхронную (исп-ем стрелочную ф-цию, присвоенную переменной)
а внутри стрелочной ф-ции выводим в консоль сначала сообщение Timer stars,
потом есть вызов ф-ции timerPromise, но перед ним стоит await, значит мы ожидаем результат промиса, 
который будет возвражен ф-цией timerPromise, и только после этого мы перейдём к следующим строкам 
и выведем в консоль Timer ended. Ф-ция дальше не выполняется, пока не получен
результат промиса.
*/

// Пример 3: ОЖИДАНИЕ РЕЗУЛЬТАТА AWAIT

const timerPromise = () =>              
    new Promise( ( resolve, reject ) => 
        setTimeout( () => resolve(), 2000 ) ) 
const asyncFn = async () => {
    console.log('Timer stars')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}
asyncFn()

/*
С помощью метода performance.now() можно засечь время, и посчитать интервал времени
*/

// Пример 4: ПЕРЕХОД С ПРОМИСОВ НА ASYNC/AWAIT
// Промисы
const getData = (url) =>    // создаём собственную ф-цию
new Promise( ( resolve, reject ) => // ф-ция возвращает промис неявно
   fetch(url)   // внутри стрелочной ф-ции вызываем метод fetch
     .then( response => response.json() ) // получаем результат в виде json
     .then( json => resolve(json) )
     .catch( error => reject(error) )
)

getData('https://jsonplaceholder.typicode.com/todos/3')
    .then( data => console.log(data) )  // data - уже распарсенный выше объект, или массив объектов
    .catch( error => console.log(error.message) )
// перепишем пример с промисами на async

const getData = async (url) => {    // стрелочная ф-ция, есть один параметр (url)
    const res = await fetch(url)    // сначала ожидаем исполнения/отклонения промиса, который будет возвращён ф-ей fetch. Результат присваиваем новой переменной res
    const json = await res.json()   // вызываем метод json переменной res, который вернёт промис, поэтому добавили ключевое слово await. Результат присваиваем переменной json
    return json // возвращаем такой json в конце этой асинхронной ф-ции. Промис getData исполнен
}

const url = 'https://jsonplaceholder.typicode.com/todos'
const data = await getData(url) // нет обработки ошибок. Добавим блок try/catch

// Дополним код:
const getData = async (url) => {    
    const res = await fetch(url)    
    const json = await res.json()   
    return json 
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}
