import sumNumbers
 from './moduleOne.mjs'

const res1 = sumNumbers
(10, 2)
console.log(res1);  // 12


const res2 = sumNumbers
(5, 10)
console.log(res2);  // 15


// ЭКСПОРТ НЕСКОЛЬКИХ ПЕРЕМЕННЫХ
import {
    one, two
} from './moduleOne.mjs'

console.log(one); // 1
console.log(two); // two

// имена переменных должны совпадать!


import { sum, mult as multNumbers } from './moduleOne.mjs'

console.log(sum(10, 2)) // 12
console.log(multNumbers(10, 2)) // 20
