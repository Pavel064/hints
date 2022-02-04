const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA

console.table(objectA);

copyOfA.c = 'abc'

console.table(copyOfA)
console.table(objectA)


function a() {
    console.log('Hey there');
}

a()  // 'Hey there'

a = 10

a() // TypeError: a is not a function


CONST для объявления переменных

const a = () => {
    console.log('Hey there')
}

a() // Hey there

a = 10 // TypeError: Assignment to constant variable.

a()


            объекты

const myCity = {
    city: 'Saratov'
}

myCity.city = 'Tbilisi'
console.log(myCity); // { city: 'Tbilisi' }

myCity.popular = true  // добавляем в объект новое свойство

console.log(myCity); // { city: 'Tbilisi', popular: true }

myCity.country = 'Georgia'

console.log(myCity); // { city: 'Tbilisi', popular: true, country: 'Georgia' }


            удаление свойств

const myCity = {
    city: 'Tbilisi',
    popular: true,
    country: 'Georgia'
}

delete myCity.country

console.log(myCity); // { city: 'Tbilisi', popular: true }

            Объекты. Доступ к значению свойства с использованием скобок

const myCity = {
    city: 'Tbilisi'
}
myCity['popular'] = true

console.log(myCity); // { city: 'Tbilisi', popular: true }

синтаксис с квадратными скобками используется если название 
свойства является значением той, или иной переменной 

const countryPropertyName = 'country'

myCity[countryPropertyName] = 'Georgia'

console.log(myCity); // { city: 'Tbilisi', popular: true, country: 'Georgia' }
 

            Объекты. Вложенные свойства

const myCity = {
    city: 'Tbilisi',
    info: {                 // вложенный объект
        isPopular: true,
        country: 'Georgia'
    }
}

console.log(myCity.info.isPopular); // true

delete myCity.info['isPopular']

console.log(myCity); // { city: 'Tbilisi', info: { country: 'Georgia' } }


            Объекты. Использование переменных

            const name = 'Paul'
            const postsQty = 30
            
            const userProfile = {
                name: name, // в качестве значения свойства объекта можно 
                postsQty: postsQty,    // использовать любые выражения
                hasSignedAgreement: false
            }
            
                сокращённая запись свойств объекта:
            
            const userProfile = {
                name,
                postsQty,
                hasSignedAgreement: false
            }
            
            console.log(userProfile);
            
            
                        Глобальные объекты
            
                        Методы - свойства объекта, которые содержат функции
            const myCity = {
                city: 'Tbilisi',                // свойство
                cityGreeting: function () {     // метод; сокращённая запись: cityGreeting() {}
                    console.log('Greetings!!!');
                }
            }
            
            myCity.cityGreeting() // Greetings!!!  *вызов метода
            
            
                        JSON - JAVASCRIPT OBJECT NOTATION
            
            {                       // формат обмена данными
                "userId": 1,
                "id": 1,
                "title": "Test title",
                "status": {
                    "completed": false
                }
            }
            
            
                        конвертация JSON В объект
            
            
            const post = {
                title: 'My post',
                likesQty: 5
            }
            
            console.log(post);  // { title: 'My post', likesQty: 5 }
            
            // JSON.stringify(post) конвертируем объект в строку
            
            const postStringified = JSON.stringify(post) // помещаем значение метода в const
            
            console.log(postStringified);  // {"title":"My post","likesQty":5}
            
            
                        мутация в JS. Значения примитивных типов
            
            
            const a = 10
            let b = a   // copy by value копирование значения
            b = 30
            
            console.log(a); // 10
            console.log(b); // 30
             
            
                        значения ссылочного типа
            
            
            const person = {
                name: 'Paul',
                age: 30
            }
            
            person.age = 18 // мутация объекта, на который ссылается
            person.isAdult = true   // переменная person
            
            console.log(person.age); // 18
            console.log(person.isAdult); // true
            
                        мутирование копий
            
            
            
            const person = {    //создаём объект
              name: 'Paul',
              age: 30
            }
            const person2 = person  // создаём новую переменную, копируем только ссылку, // копирование ссылки copy by reference
                                    // сам объект остаётся в другом месте памяти
            
            person2.age = 26    // мутируем объект, используя переменную person2
            person2.isAdult = true
            
            console.log(person.age); // 26, т.к. person и person2 ссылаются на один объект в памяти
            console.log(person.isAdult); // true
            
            console.log(person); // { name: 'Paul', age: 26, isAdult: true }
            console.log(person2);// { name: 'Paul', age: 26, isAdult: true }
            
            
                        как избежать мутаций
            
            вариант 1
            const person = {
                name: 'Paul',
                age: 30
            }
            
            const person2 = Object.assign({}, person) // создаём новый объект, копируем в него свойства объекта person
            
            person2.age = 26    // меняем свойство объекта person2
            
            console.log(person2.age); // 26
            console.log(person.age); // 30
            
            вариант 2
            const person = {
                name: 'Paul',
                age: 30
            }
            
            const person2 = { ...person } // ... - оператор разделения объекта на свойства
            
            person2.name = 'Mari'
            
            console.log(person2.name);   // Mari
            console.log(person.name);    // Paul
            
            3 вариант
            const person = {
                name: 'Paul',
                age: 30
            }
            
            const person2 = JSON.parse(JSON.stringify(person))  // сначала конвертируем объект person в строку, 
                                                                // затем эту строку передаём, как аргумент в вызове другого метода, parse, конвертируем строку обратно в объект
            person2.name = 'Mari'                               // ссылки на вложенные объекты не сохраняются лишь в этом случае!
            
            console.log(person2.name); // Mari
            console.log(person.name); // Paul
            