
// // ПРОМИСЫ ПОЗВОЛЯЮТ ОБРАБАТЫВАТЬ ОТЛОЖЕННЫЕ ВО ВРЕМЕНИ СОБЫТИЯ

// // ПРОМИС - ЭТО ОБЕЩАНИЕ ПРЕДОСТАВИТЬ РЕЗУЛЬТАТ ПОЗЖЕ

// // ПРОМИС МОЖЕТ ВЕРНУТЬ ОШИБКУ ЕСЛИ РЕЗУЛЬТАТ ПРЕДОСТАВИТЬ НЕВОЗМОЖНО

// // СОСТОЯНИЕ ПРОМИСА:
// // ОЖИДАНИЕ (результата/ошибки, pending) - когда промис только создаётся
// // ИСПОЛНЕН (resolve) - когда вернул результат
// // ОТКЛОНЁН (reject) - если возникла ошибка


//     // СОЗДАНИЕ ПРОМИСА
// // ПРОМИС - это ОБЪЕКТ

// const myPromise = new Promise((resolve, reject) => {    // создаём новый экземпляр класса Promise
//     /**
//      * Выполнение фсинхронных действий
//      * 
//      * Внутри этой ф-ции нужно в результате вызывать одну из
//      * функций resolve или reject
//      */
// })
// // Вновь созданный Промис будет в состоянии pending (ожидание)


// // ПОЛУЧЕНИЕ РЕЗУЛЬТАТА ПРОМИСА
// myPromise
// .then(value => {
//     /**
//      * Действия в случае успешного исполнения Промиса
//      * Значение value - это значение, переданное в вызове ф-ции resolve внутри Промиса
//      */
// })
// .catch(error) => {
//     /**
//      * Действия в случае отклонения Промиса
//      * Значение error - это значение, переданное в вызове
//        функции reject внутри Промиса
//      */
// }

// ПОЛУЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ FETCH API
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    console.log(response)
    return response.json()  // явно возвращаем результат ф-ции
})  // если сервер успешно вернул ответ, то вызовется эта колбэк ф-ция
.then(json => console.log(json))    
.catch(error => console.log(error))

/* отправляем fetch-запрос. Возвращается Промис, который будет в состоянии ОЖИДАНИЕ
Далее надо обработать результат промиса. Когда удалённый сервер нам ответит,
мы должны этот ответ взять и получить из него данные (объект, либо массив объектов)
Пока Промис в состоянии ОЖИДАНИЕ, ни одна из этих ф-ций не будет вызвана.
Но, как только Промис поменяет состояние и станет ИСПОЛНЕНЫМ, или ОТКЛОНЁННЫМ
Тогда вызовется одна из этих колбэк функций.
Получаем ответ от сервера, присваиваем его значение параметру Response колбэк ф-ции
Далее должны вызвать метод .json в этом объекте Response, чтобы получить данные ответа от сервера
json-метод возвращает промис (мы не сразу получаем данные; требуется время, чтобы распарсить ответ от сервера и получить из него JS-массив объектов)
Из-за того, что json-метод возвращает Промис, мы добавляем ещё один блок .then
Во второй колбэк ф-ции значением для параметра json будет JS-объект, либо массив объектов
Если в консоли напечатать этот json, то увидим результат, который вернул сервер
в виде объекта, либо массива объектов.
В конце стоит вызов метода catch на случай, если один из предыдущих промисов
вернул ошибку. Вместо того, чтобы стать ИСПОЛНЕНЫМ, промис может быть ОТКЛОНЁННЫМ
Ошибка будет передана как значение параметра error третьей колбэк ф-ции
*/

// Запустить fetch-запрос не получится через node промисы.js, т.к. ноде не поддерживает fetch

// вернём результат json-метода неявно:
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())  
.then(json => console.log(json))    
.catch(error => console.log(error.message))


// Пример: ПРОМИСЫ

const getData = (url) =>    // создаём собственную ф-цию
new Promise( ( resolve, reject ) => // ф-ция возвращает промис неявно
   fetch(url)   // внутри стрелочной ф-ции вызываем метод fetch
     .then( response => response.json() )
     .then( json => resolve(json) )
     .catch( error => reject(error) )
)

getData('https://jsonplaceholder.typicode.com/todos/3')
    .then( data => console.log(data) )
    .catch( error => console.log(error.message) )
