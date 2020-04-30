import ChangeEmitter from '../libraries/ChangeEmitter'
import { render } from '../../scripts/helpers'

function BattlegroundArea () {
  ChangeEmitter.call(this)

  this.template = `
    <h2>BattlegroundArea</h2>
    <button>Battleground Area</button>
  `
}

BattlegroundArea.prototype = Object.create(ChangeEmitter.prototype)
BattlegroundArea.prototype.constructor = BattlegroundArea
BattlegroundArea.prototype.start = function () {
  this.area = document.getElementById('area')

  render(this.template, this.area)

  this.loadEvents()
}

BattlegroundArea.prototype.loadEvents = function () {
  this.button = this.area.querySelector('button')

  this.button.addEventListener('click', () => {
    this.emitChange('result')
  })
}

export default BattlegroundArea
