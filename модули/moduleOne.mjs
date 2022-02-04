const sum = (a,b) => a + b

export default sum

// ЭКСПОРТ НЕСКОЛЬКИХ ПЕРЕМЕННЫХ

const one = 1
const two = 'two'

export {
    one,
    two
}


const sum = (a, b) => a + b

const mult = (a, b) => a * b

export { sum, mult }
