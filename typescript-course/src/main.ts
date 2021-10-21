let message: string = 'Hello World' // 'a' "a" `a`
let total: number = 10.5 // 10
let isOpen: boolean = true //false

console.log(message, total, isOpen)

// any, void, never
let stock: number | null = 89

stock = null

function showInformation (name: string = ''): void {
  console.log('Cataline')
}

function error (): never {
  throw new Error('Erro')
}

// array, tuple, enum
let items: number[] // Array<number>
items = [1, 2, 3, 4]

let pessoa: [string, number, boolean] = ['Mich', 19, true]

enum Colors {
  white = '#fff',
  black = '#000'
}

let white: Colors = Colors.white
let black: Colors = Colors.black
console.log(white, black)

type Pet = 'dog' | 'cat' | 'zebra'

// Type Union
function showPet (pet: Pet) {
  console.log(pet)
}

showPet('cat') // dog, zebra

function displayPet (pet: Pet) {
  console.log(pet)
}

let nameCourse = 'Cataline'
console.log(nameCourse)

window.addEventListener('keypress', event => {
  console.log(event.key)
})

const inputName = document.querySelector('input') as HTMLInputElement

inputName.value
