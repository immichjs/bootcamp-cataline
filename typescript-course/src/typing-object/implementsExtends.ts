interface Veiculo {
  rodas: number
  acelerar: () => void
  frear?: () => void
}

interface Moto extends Veiculo {
  capacete: boolean
  empinar: () => void
}

let bross: Moto

// bross.acelerar()

class CriarVeiculo implements Veiculo {
  rodas: number

  constructor (rodas: number) {
    this.rodas = rodas
  }

  acelerar() {
    console.log('Acelerando...')
  }
}
