function View (rootEl, template) {
  this.rootEL = rootEl
  this.template = template
}

View.prototype.render = function () {
  this.rootEL.innerHTML = this.template
}
