import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  // this will enable you to do thi.formTarget, this.listTarget
  // and this.inputTarget
  // this.***Target
  static targets = ['form', 'list', 'input'];

  connect() {
    this.fetchMovies('harry potter'); // on 1st page load
  }

  fetchMovies(query) {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
      .then((response) => response.json())
      .then((data) => {
        this.insertMovies(data);
      });
  }

  insertMovies(data) {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
        <img src="${result.Poster}" alt="" width="100">
      </li>`;
      this.listTarget.insertAdjacentHTML('beforeend', movieTag);
    });
  }

  searchMovie(event) {
    event.preventDefault();

    this.listTarget.innerHTML = '';
    this.fetchMovies(this.inputTarget.value);
  }
}
