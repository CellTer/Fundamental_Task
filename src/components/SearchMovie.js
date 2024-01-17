const axios = require("axios");
const apiKey = "63288fbed2ea65b17d9f1c7d731b981a";

class MovieSearch extends HTMLElement {
  constructor() {
    super();
    this.searchForm = null;
    this.searchInput = null;
    this.movieListElement = null;
  }

  connectedCallback() {
    this.render();
    this.searchForm = this.querySelector("#search-form");
    this.searchInput = this.querySelector("#search-input");
    this.movieListElement = this.querySelector("#movie-list");

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = this.searchInput.value.trim();
      if (query !== "") {
        this.searchMovies(query);
      }
    });
  } 

  createMovieElement(movie) {
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `
      <div class="card">
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" /> &emsp; 
        <div>
          <h2>${movie.title}</h2>
          <p>
            <strong>Release Date :</strong> ${movie.release_date} <br />
          </p>
          <p> ${movie.overview} </p>
        </div>
      </div>
      <hr />
    `;
    return movieElement;
  }

  renderSearchResults(movies) {
    this.movieListElement.innerHTML = "";

    if (movies.length === 0) {
      this.movieListElement.textContent = "No movies found.";
      this.movieListElement.style.color = "white"; /* Mengubah warna teks menjadi putih */
      return;
    }

    const movieElements = movies.map((movie) => this.createMovieElement(movie));
    movieElements.forEach((movieElement) => {
      this.movieListElement.appendChild(movieElement);
    });
  }

  searchMovies(query) {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    axios
      .get(searchUrl)
      .then((response) => {
        const movies = response.data.results;
        this.renderSearchResults(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    this.innerHTML = `
      <form id="search-form">
        <input
          type="text"
          id="search-input"
          placeholder="Find Movies"
        />
        <button type="submit">Search</button>
      </form>
      <ul id="movie-list"></ul>
    `;
  }
}

customElements.define("search-movie", MovieSearch);
