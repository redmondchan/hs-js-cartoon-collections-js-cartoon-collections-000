function dwarfRollCall(dwarves) {
  var dwarvesList = []
  for (let i = 0; i < dwarves.length; i++){
    dwarvesList.push((i + 1) + ". " + dwarves[i] + " ")
  }
  return dwarvesList.join("")
}

function summonCaptainPlanet(planeteerCalls){
  var elements = []
  for (let i = 0; i < planeteerCalls.length; i++){
<<<<<<< HEAD
    elements.push(planeteerCalls[i].toUpperCase() + "!")
=======
    elements.push(planeteerCalls[i].toUpperCase + "!")
>>>>>>> eca6048a00b856ccac9c3d64f86cb504e7088958
  }
  return elements
}

function longPlaneteerCalls(words) {
  if (words.length > 4){
    return true
  } else {
    return false
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
  for (let i = 0; i < foods.length; i++) {
    if (foods.includes(cheese[i])) {
      return cheese[i]
    } else {
      return "no cheese!"
    }
  }
}
