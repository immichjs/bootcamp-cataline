type UF = 'PE' | 'SP' | 'MG'

interface Son {
  name: string,
  age: number
}

interface User {
  name: string,
  age?: number,
  address: {
    city: string,
    UF: UF
  },
  sons?: Son[]
  sayHello: () => void
}

function showCity (user: User) {
  user.address.UF = 'SP'
  user.sayHello = () => console.log('Hello')
  
  return user.address.city
}

const person: User = {
  name: 'Mich',
  age: 19,
  address: {
    city: 'Sorocaba',
    UF: 'SP'
  },
  sons: [{ name: 'Neko', age: 4 }],
  sayHello: () => console.log('Hello')
}

let users: User[] = [person]

users[0].sayHello()
