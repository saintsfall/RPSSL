// imports
import ChoiceArea from './screens/ChoiceArea'
import BattlegroundArea from './screens/BattlegroundArea'
import ResultArea from './screens/ResultArea'
import { render } from './helpers'

import judge from './choices'

function App (choiceArea, battlegroundArea, resultArea) {
  const app = document.getElementById('app')

  const model = {
    choices: ['rock', 'paper', 'scissors'],
    status: ['choice', 'battle', 'result'],
    currentStatus: 'choice'
  }

  const methods = {
    initBattle (id) {
      console.log(judge(id, this.getChoice(model.choices)))
    },
    getChoice (choices) {
      return choices[Math.round(Math.random() * 2)]
    }
  }

  const events = () => {
    app.addEventListener('click', function (event) {
      if (model.choices.includes(event.target.id)) {
        methods.initBattle(event.target.id)
      }
    })
  }

  const template = `
    <div class=container">
      <div id="area">Área</div>
      <div id="player">Player</div>
    </div>
  `

  const init = () => {
    const screens = {
      choice: choiceArea,
      battle: battlegroundArea,
      result: resultArea
    }

    const { currentStatus } = model

    for (const screen in screens) {
      screens[screen].change(status => {
        screens[status].start()
      })
    }

    // start first screen
    screens[currentStatus].start()
  }

  render(template, app)
  events()
  init()
}

App(new ChoiceArea(), new BattlegroundArea(), new ResultArea())
