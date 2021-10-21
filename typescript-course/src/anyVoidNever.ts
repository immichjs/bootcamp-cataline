// any, void, never
let stock: number | null = 89

stock = null

function showInformation (name: string = ''): void {
  console.log('Cataline')
}

function error (): never {
  throw new Error('Erro')
}
