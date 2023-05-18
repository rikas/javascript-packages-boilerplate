import Sortable from 'sortablejs';
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  connect() {
    // this.element; // this is the element where data-controller is used
    Sortable.create(this.element, {
      ghostClass: 'ghost',
      animation: 150,
      onEnd: (event) => {
        alert(`${event.oldIndex} moved to ${event.newIndex}`);
      },
    });
  }
}
