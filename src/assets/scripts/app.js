// imports
import judge from './choices'

function App () {
  const app = document.getElementById('app')

  const model = {
    choices: ['rock', 'paper', 'scissors']
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
    <div class="screen-choices">
      <button id="rock">Rock</button>
      <button id="paper">Paper</button>
      <button id="scissors">Scissors</button>
    </div>
  `

  const render = (template, root) => {
    root.innerHTML = template
  }

  render(template, app)
  events()
}

App()
