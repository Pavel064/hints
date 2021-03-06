            // МОДУЛИ

// Модули позволяют структурировать код

// модули позволяют избегать дублирования блоков кода

// Пример экспорт по умолчанию

moduleOne.js

const myName = () => {
    console.log('Paul');
}

export default myName

moduleTwo.js

import printMyName from './moduleOne.js'

printMyName() // Paul

// Названия переменных могут не совпадать
// путь к файлу: .js в конце можно опускать
// myName и printMyName отличаются. Это допускается при дефолтном экспорте

// переменные, которые определены в рамках конкретного модуля,
// и которые не экспортированы в другие модули, не доступны в других модулях


// при импорте можно переименовывать переменные:
import {
    one as oneRenamed,
    two
} from './moduleOne.mjs'


//         ПРАВИЛА РАБОТЫ С МОДУЛЯМИ

//     1. МОДУЛИ ДОЛЖНЫ БЫТЬ ОДНОЦЕЛЕВЫМИ
//     2. РАСПОЛАГАЙТЕ ВСЕ EXPORT ИНСТРУКЦИИ ВНИЗУ ФАЙЛА
//     3. РАСПОЛАГАЙТЕ ВСЕ IMPORT ИНСТРУКЦИИ ВВЕРХУ ФАЙЛА
//     4.ПО ВОЗМОЖНОСТИ ИСПОЛЬЗУЙТЕ EXPORT DEFAULT


//             МОДУЛИ В REACT

//     создаём приложение реакт: npx create-react-app my-app
//         Вы используете create-react-appверсию 4.0.3, которая отстает от последней версии (5.0.0).

//         Мы больше не поддерживаем глобальную установку приложения Create React.

//         это работает — npx create-react-app@5.0.0 my-app


