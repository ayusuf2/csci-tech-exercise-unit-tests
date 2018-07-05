const Student = (name, school) => {
  let state = {
    name: name,
    school: school,
    message: `My name is ${name} and I am enrolled at ${school}!`
  }

  return Object.assign(
    {},
    state
  )
}

module.exports = {
  Student
}
