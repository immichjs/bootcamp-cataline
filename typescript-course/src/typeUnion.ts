// Type Union
type Pet = 'dog' | 'cat' | 'zebra'

function showPet (pet: Pet) {
  console.log(pet)
}

showPet('cat') // dog, zebra

function displayPet (pet: Pet) {
  console.log(pet)
}
