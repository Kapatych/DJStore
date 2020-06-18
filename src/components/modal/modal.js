class Modal {
  constructor(modal) {
    this.modal = modal;
    this.init();
  }

  init() {
    this.selectProperties();
    this.setListeners();
  }

  selectProperties() {
    this.openButtons = document.querySelectorAll('.modal-trigger');
    this.closeButtons = this.modal.querySelectorAll('.modal__close');
    this.modalContent = this.modal.querySelector('.modal__container')
  }

  setListeners() {
    this.openButtons.forEach(button => button.addEventListener('click', (e) => this.handleOpenButtonClick(e.target)));
    this.closeButtons.forEach(button => button.addEventListener('click', () => this.toggleOpen()));
    // Close on click out
    document.addEventListener('click', (e) => this.handleDocumentClick(e.target));
  }

  toggleOpen() {
    this.modal.classList.toggle('modal--open')
  }

  handleOpenButtonClick(target) {
    const goal = this.modal.querySelector(`.${target.dataset.trigger}`);
    if (this.modal.contains(goal)) {
      this.toggleOpen()
    }
  }

  handleDocumentClick(target) {
    const button = target.classList.contains('modal-trigger');
    const content = target === this.modalContent || this.modalContent.contains(target);
    if (!button && !content && this.modal.classList.contains('modal--open')) {
      this.toggleOpen();
    }
  }
}

const modals = document.querySelectorAll('.js-modal');
modals.forEach(modal => new Modal(modal));
