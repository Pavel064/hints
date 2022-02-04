//  // МАССИВЫ

//  const myArray = [1, 'abc', 3, true]   // создаём новый массив (объект), который имеет три элемента; добавлять можно элементы разного типа
//  console.log(myArray); // [ 1, 'abc', 3, true ]
 
//  const myArray2 = new Array(1, 2, 3) // создаём новый экземпляр класса Array(классы начинаюэся с заглавной буквы)
//  console.log(myArray2); // [1, 2, 3]
   
//      // ЧТЕНИЕ ЗНАЧЕНИЙ МАССИВА
 
//  const myArray = [ 1, true, 'abc' ] // объявляем массив
//  console.log(myArray); // [ 1, true, 'abc' ] выводим в консоль весь массив
 
//  console.log(myArray[0]); // 1; обращаемся к первому свойству объекта
//  console.log(myArray[1]); // true; если св-ва цифровые, то нельзя использовать точечную запись
 
//  console.log(myArray.length); // 3
 
//  myArray[0] // 1
//  myArray.0 // SyntaxError: Unexpected number
 
 
//      // ДЛИНА МАССИВА
 
//  const myArray = [ 1, 2, 3, 4 ]  // выражение
//  console.log(myArray); // [ 1, 2, 3, 4 ] выражение-инструкция
//  console.log(myArray.length); // 4
 
//  myArray[2] = 'abc' // можем поменять значение элемента, не только читать
 
//  console.log(myArray); // [ 1, 2, 'abc', 4 ]
//  console.log(myArray[2]); // abc
 
//  myArray[4] = true   // добавляем новый элемент массива
 
//  console.log(myArray);   // [ 1, 2, 'abc', 4, true ]
//  console.log(myArray.length); // 5
 
//      // МЕТОД PUSH добавляет новый элемент в конец массива
 
//  const myArray = [ 1, 2, 3 ]
//  console.log(myArray); // [ 1, 2, 3 ]
 
//  myArray.push(4) //  прописываем значение нового элемента массива
 
//  console.log(myArray); // [ 1, 2, 3, 4 ] выводим массив в консоль
 
//  myArray.push(true) 
 
//  console.log(myArray); // [ 1, 2, 3, 4, true ]
 
 
//      // МЕТОД POP удаляет элемент с конца массива
 
//  const myArray = [ 1, 2, 3 ]
//  console.log(myArray); // [ 1, 2, 3 ]
 
//  myArray.pop() // вызываем метод pop
 
//  console.log(myArray); // [ 1, 2 ]
 
//  const removedElement = myArray.pop() // присваиваем результат вызова метода pop переменной 
//          // метод pop кроме удаления элемента, также возвращает удалённый элемент
//  console.log(myArray); // [ 1 ]
//  console.log(removedElement); // 2
 
//      // МЕТОД UNSHIFT добавляет элемент в начало массива
 
//  const myArray = [ 1, 2, 3 ]
//  console.log(myArray); // [ 1, 2, 3 ]
 
//  myArray.unshift(true) // добавляем элемент в начало массива
 
//  console.log(myArray); // [ true, 1, 2, 3 ]
 
//  myArray.unshift('abc')
 
//  console.log(myArray); // [ 'abc', true, 1, 2, 3 ]
 
//      // МЕТОД SHIFT удаляет первый элемент массива
 
//  const myArray = [ 1, 2, 3, 4 ]
//  console.log(myArray); // [ 1, 2, 3, 4 ]
 
//  myArray.shift() // вызов метода
 
//  console.log(myArray); // [ 2, 3, 4 ]
 
//  const removedElement = myArray.shift() // можно вернуть удалённый элемент и присвоить его значение переменной
 
//  console.log(myArray); // [ 3, 4 ]
//  console.log(removedElement); // 2
 
//      // МЕТОД FOREACH перебирает все элементы массива и выполняет определённые действия с этими элементами
 
//  const myArray = [ 1, 2, 3, 4 ]
//  console.log(myArray); // [ 1, 2, 3, 4 ]
 
//  myArray.forEach( el => console.log(el * 2) ) // для каждого элемента массива метод forEach вызывает указанную анонимную колбэк функцию
//                                              // выполняет действие с каждым элементом массива ( результат 2 4 6 8 )
//  console.log(myArray); // [ 1, 2, 3, 4 ] оригинальный массив не изменился
 
//  // тренеровка
//  myArray.forEach( el => console.log(el + 8) ) // 9 10 11 12
 
//  const myArray2 = myArray // копируем ссылку на объект в памяти
//  myArray2[0] = 'abc' // присваиваем новое значение элементу массива [0]
//  myArray2.forEach( el => console.log(el + 11) ) // перебираем каждый элемент массива и добавляем к нему число 11; результат выводим в консоль
//  // abc11 13 14 15
//  console.log(myArray); // [ 'abc', 2, 3, 4 ]
 
//  myArray2[2] = true
//  myArray[3] = null
//  console.log(myArray2); // [ 'abc', 2, true, null ]
 
//      // МЕТОД MAP перебирает все элементы массива и возвращает новый массив
 
//  const myArray = [ 1, 2, 3 ]
//  console.log(myArray); // [ 1, 2, 3 ]
 
//  const newArray = myArray.map( el => el * 3 ) // в качестве аргумента также ожидает колбэк ф-цию, но map возвращает новый массив. 
//                                              // Создаёт новый массив и формирует его исходя из результатов колбэк ф-ции. 
//                                              // Что функция возвращает, то и будет записано в новый массив в качестве элемонтов. 
//                                              // Присваиваем результат вызова метода map переменной
//                                              // Оригинальный массив не изменится
//                                                  возвращаем результат неявно
//  console.log(newArray); // [ 3, 6, 9 ]
//  console.log(myArray); // [ 1, 2, 3 ]
 
//  const myArray = [ 1, 2, 3 ]
 
//  const newArray = myArray.map( (el) => {  // стрелочная функция
//      return el * 3
//  } )
 
//  console.log(newArray); // [ 3, 6, 9 ]
 
//  перепишем стрелочную ф-цию на функциональное анонимное выражение
//  const myArray = [1, 2, 3]
 
//  const newArray = myArray.map( function (el) {   // анонимное функциональное выражение
//      return el * 3
//  })
//  console.log(newArray);  // [ 3, 6, 9 ]
 



// // Задача: просуммировать все значения массивов
// let nums = [1,2,3];

// let sum = nums.reduce((x, y) => x + y);

// console.log(sum);




// // удалить ложные значения в массиве:
// let arr = [false, 0, "", null, NaN, undefined, 2, true, "dfgg"]

// let new_arr = arr.filter(Boolean);

// console.log(new_arr);



// // конвертировать массив в объект:
// let cars = ["Honda", "Toyota", "Seat", "Mazda", "BMW"];

// let obj = { ...cars }

// console.log(obj);
// console.log(cars);



// // удалить повторяющиеся элементы из массива:
// let nums = [1,2,3,1,1,22,2,2,3,45,45,3];

// let uni_nums = [...new Set(nums)];
// let uni_nums2 = Array.from(new Set(nums));

// console.log(uni_nums); //[ 1, 2, 3, 22, 45 ]
// console.log(uni_nums2); //[ 1, 2, 3, 22, 45 ]



// заменить конкретное значение в массиве:
// cars.splice(0,2, "Nissan", "Tesla") // с нулевого индекса меняем два значения

// console.log(cars); //[ 'Nissan', 'Tesla', 'Seat', 'Mazda', 'BMW' ]



// // перебор массива без метода map
// let new_cars = [
//     {car: "Honda", color:"Red"},
//     {car: "Mrds", color:"blue"},
//     {car: "Aurus", color:"White"},
//     {car: "Bentley", color:"Green"},
// ]

// let car_name = Array.from(new_cars, ({car}) => car)
// console.log(car_name); //[ 'Honda', 'Mrds', 'Aurus', 'Bentley' ]


// // Отсечение массива:
// let nums = [1,2,3,1,1,22,2,2,3,45,45,3];
// let cars = ["Honda", "Toyota", "Seat", "Mazda", "BMW"];

// nums = []; // обнуление массива
// nums.splice(0,nums.length) // обнуление массива
// console.log(nums); // []



// // найти пересечения новых массивов:
// let nums = [1,2,3,1,1,22,2,2,3,45,45,3];
// let nums2 = [33,45,43,78,76,3,45];
// let cars = ["Honda", "Toyota", "Seat", "Mazda", "BMW"];

// let new_nums = [ ...new Set(nums) ].filter(item => nums2.includes(item))
// console.log(new_nums); //[ 3, 45 ]



// // как сделать реверс массива:
// let cars = ["Honda", "Toyota", "Seat", "Mazda", "BMW"];
// let new_nums = cars.reverse()

// console.log(new_nums); //[ 'BMW', 'Mazda', 'Seat', 'Toyota', 'Honda' ]



// найти случайное число массива
let nums = [1,2,3,1,1,22,2,2,3,45,45,3];

let rand_num = nums[(Math.floor(Math.random() * (nums.length)))]
console.log(rand_num);
