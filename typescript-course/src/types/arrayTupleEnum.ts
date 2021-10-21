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
