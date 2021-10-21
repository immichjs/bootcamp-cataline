function showSon (user: User) {
  return user.sons?.pop()
}

console.log(showSon(person))
