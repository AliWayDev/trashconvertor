import {convertor} from "./index.js";

const result = await convertor(30000000, 'RUB')
const result1 = await convertor(30000000, 'EUR')
const result2 = await convertor(30000000, 'TRY')

console.log(result, ': UZS(30 limon) -- TO --> RUB')
console.log(result1, ': UZS(30 limon) -- TO --> EUR')
console.log(result2, ': UZS(30 limon) -- TO --> TRY')
