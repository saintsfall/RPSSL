import ChangeEmitter from '../libraries/ChangeEmitter'
import { render } from '../../scripts/helpers'

function ResultArea () {
  ChangeEmitter.call(this)

  this.template = `
    <h2>ResultArea</h2>
    <button>Result Area</button>
  `
}

ResultArea.prototype = Object.create(ChangeEmitter.prototype)
ResultArea.prototype.constructor = ResultArea

ResultArea.prototype.start = function () {
  this.area = document.getElementById('area')

  render(this.template, this.area)
  this.loadEvents()
}

ResultArea.prototype.loadEvents = function () {
  this.button = this.area.querySelector('button')

  this.button.addEventListener('click', () => {
    this.emitChange('choice')
  })
}

export default ResultArea
