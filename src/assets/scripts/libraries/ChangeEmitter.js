function ChangeEmitter () {
  this.listener = null
}

ChangeEmitter.prototype.change = function (fn) {
  this.listener = fn
}

ChangeEmitter.prototype.emitChange = function (payload) {
  if (this.listener) {
    this.listener(payload)
  }
}

export default ChangeEmitter
