import Sortable from 'sortablejs';

const list = document.querySelector('#results');

const initSortable = () => {
  Sortable.create(list, {
    ghostClass: 'ghost',
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    },
  });
};

const function2 = () => {
  console.log('Hello world');
};

const name = 'Ricardo';

export { initSortable, function2, name };
