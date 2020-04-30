function EventEmitter () {
  this.events = {}
}

EventEmitter.prototype.on = function (event, fn) {
  if (this.events[event]) {
    this.events[event].push(fn)
  }

  this.events[event] = [fn]
}

EventEmitter.prototype.emit = function (event, payload) {
  if (this.events[event]) {
    this.events[event].forEach(listener => listener(payload))
  }
}

export default EventEmitter
