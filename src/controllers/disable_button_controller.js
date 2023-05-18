import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['button', 'link'];

  connect() {
    // console.log(this.buttonTarget);
    // console.log(this.linkTarget);
  }

  disable() {
    this.buttonTarget.disabled = true;
    this.buttonTarget.innerText = 'CLICKED!';
    this.linkTarget.classList.remove('d-none');
  }

  enable() {
    this.buttonTarget.disabled = false;
    this.buttonTarget.innerText = 'Click me!';
    this.linkTarget.classList.add('d-none');
  }
}
