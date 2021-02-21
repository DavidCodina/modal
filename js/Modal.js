function Modal(selector, config){
  this._config          = config || {};
  this._modal           = document.querySelector(selector);
  this._openElements    = document.querySelectorAll('[data-target="' + selector + '"]');
  this._dismissElements = this._modal.querySelectorAll('[data-dismiss="modal"]');
  this.show             = this.show.bind(this);
  this.hide             = this.hide.bind(this);
  this.destroy          = this.destroy.bind(this);

  this._init();
  return this;
}


Modal.prototype._init = function(){
  for (var i = 0; i < this._openElements.length; i++){
    var element = this._openElements[i];
    element.addEventListener('click', this.show);
  }
  for (var j = 0; j < this._dismissElements.length; j++){
    var element = this._dismissElements[j];
    element.addEventListener('click', this.hide);
  }
};


Modal.prototype.show = function(){
  this._modal.classList.remove('animate-close');
  document.querySelector('BODY').classList.add('modal-open');
  this._modal.classList.add('animate-open');
  this._modal.classList.add('show');
  return this;
};


Modal.prototype.hide = function(){
  document.querySelector('BODY').classList.remove('modal-open');
  this._modal.classList.remove('animate-open');
  this._modal.classList.add('animate-close');
  setTimeout(function(){
    this._modal.classList.remove('show');
    this._modal.classList.remove('animate-close');
  }.bind(this), 1500);
  return this;
};


Modal.prototype.destroy = function(){
  for (var i = 0; i < this._openElements.length; i++){
    var element = this._openElements[i];
    element.removeEventListener('click', this.show);
  }
  for (var j = 0; j < this._dismissElements.length; j++){
    var element = this._dismissElements[j];
    element.removeEventListener('click', this.hide);
  }

  console.log("All click event listeners removed for " + this._modal);
  return this;
};
