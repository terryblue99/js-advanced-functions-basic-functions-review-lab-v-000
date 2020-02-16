function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(flair='*') {
  return function(type='special') {
    return `You are ${flair}${type}${flair}!`
  }
}
let encouragingPromptFunction = wrapAdjective()
encouragingPromptFunction()

let Calculator = {
  add: function() {
        return 1 + 3
      },
  subtract: function() {
        return 1 - 3
      },
  multiply: function() {
        return 1 * 3
      },
  divide: function() {
        return 10 / 5
      }
}

let actionApplyer = function(startInt, array) {
  let int = startInt
  for (let i = 0; i < array.length; i++ ){
    int = array[i](int)
  }
  return int
}
