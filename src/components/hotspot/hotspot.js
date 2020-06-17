class Hotspot {
  constructor(hotspot) {
    this.hotspot = hotspot;
    this.init();
  }

  init() {
    this.selectProperties();
    this.setListeners();
  }

  selectProperties() {
    this.openButton = this.hotspot.querySelector('.hotspot__button');
    this.tooltip = this.hotspot.querySelector('.hotspot__tooltip');
    this.closeButton = this.tooltip.querySelector('.hotspot__close');
  }

  setListeners() {
    this.openButton.addEventListener('click', () => this.toggleOpen());
    this.closeButton.addEventListener('click', () => this.toggleOpen());
    // Close on click out
    document.addEventListener('click', (e) => this.handleDocumentClick(e.target));
  }

  toggleOpen() {
    this.tooltip.classList.toggle('hotspot__tooltip--open')
  }

  handleDocumentClick(target) {
    const button = target === this.openButton;
    const tooltip = target === this.tooltip || this.tooltip.contains(target);
    if (!button && !tooltip && this.tooltip.classList.contains('hotspot__tooltip--open')) {
      this.toggleOpen();
    }
  }
}

const hotspots = document.querySelectorAll('.js-hotspot');
hotspots.forEach(hotspot => new Hotspot(hotspot));
