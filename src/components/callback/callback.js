class Callback {
  constructor(callback) {
    this.callback = callback;
    this.init();
  }

  init() {
    this.selectProperties();
    this.setListeners();
  }

  selectProperties() {
    this.form = this.callback.querySelector('.callback__form');
    this.success = this.callback.querySelector('.callback__success');
  }

  setListeners() {
    this.form.addEventListener('submit', (e) => this.handleFormSubmit(e))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.form.classList.remove('callback__form--active');
    this.success.classList.add('callback__success--active');
  }
}

const callbacks = document.querySelectorAll('.js-callback');
callbacks.forEach(callback => new Callback(callback));
