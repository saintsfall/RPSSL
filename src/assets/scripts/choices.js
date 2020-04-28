const choices = {
  rock: {
    name: 'rock',
    wins: [
      {
        name: 'lizard',
        message: 'rock crushes lizard'
      },
      {
        name: 'scissors',
        message: 'rock smashes scissors'
      }
    ]
  },
  paper: {
    name: 'paper',
    wins: [
      {
        name: 'rock',
        message: 'paper cover rock'
      },
      {
        name: 'spock',
        message: 'paper disproves spock'
      }
    ]
  },

  scissors: {
    name: 'scissors',
    wins: [
      {
        name: 'paper',
        message: 'scissors cut paper'
      },
      {
        name: 'lizard',
        message: 'scissors decapitates lizard'
      }
    ]
  },

  spock: {
    name: 'spock',
    wins: [
      {
        name: 'scissors',
        message: 'spock smashes scissors'
      },
      {
        name: 'rock',
        message: 'spock vaporizes rock'
      }
    ]
  },

  lizard: {
    name: 'lizard',
    wins: [
      {
        name: 'spock',
        message: 'lizard poisons spock'
      },
      {
        name: 'paper',
        message: 'lizard eats paper'
      }
    ]
  }
}

const judge = function (choice1, choice2) {
  const playerChoice = choices[choice1]
  const enemyChoice = choices[choice2]

  const win = playerChoice.wins.find(enemy => {
    return enemy.name === enemyChoice.name
  })

  if (win) {
    return win.message
  }

  const loose = enemyChoice.wins.find(player => {
    return player.name === playerChoice.name
  })

  if (loose) {
    return loose.message
  }

  return 'Empatou essa caralha!!!'
}

export default judge
