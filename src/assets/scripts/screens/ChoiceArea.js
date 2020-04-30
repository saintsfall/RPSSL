import ChangeEmitter from '../libraries/ChangeEmitter'
import { render } from '../../scripts/helpers'

function ChoiceArea () {
  ChangeEmitter.call(this)

  this.template = `
    <h2>ChoiceArea</h2>
    <button>Battlegrund Area</button>
  `
}

ChoiceArea.prototype = Object.create(ChangeEmitter.prototype)
ChoiceArea.prototype.constructor = ChoiceArea

ChoiceArea.prototype.start = function () {
  this.area = document.getElementById('area')

  render(this.template, this.area)
  this.loadEvents()
}

ChoiceArea.prototype.loadEvents = function () {
  this.button = this.area.querySelector('button')

  this.button.addEventListener('click', () => {
    this.emitChange('choice')
  })
}

export default ChoiceArea
