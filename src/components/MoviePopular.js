const axios = require("axios");

class MoviePopular extends HTMLElement {
  async connectedCallback() {
    const APIKey = "63288fbed2ea65b17d9f1c7d731b981a";
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`;

    try {
      const response = await axios.get(API_URL);
      const movies = response.data.results;
      const moviePopular = new MoviePopularRenderer(movies);
      this.innerHTML = moviePopular.render();
    } catch (error) {
      console.error(error);
    }
  }
}

class MoviePopularRenderer {
  constructor(movies) {
    this.movies = movies;
  }

  render() {
    return `
    <h1>Trending Movies</h1>
    <div class="movies-container">
      ${this.movies
        .slice(0, 9)
        .map(
          (movie) => `
            <div class="card">
              <div class="poster">
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
              </div>
              <div class="movie-details">
                <h2>${movie.title}</h2>
                <p><strong>Release Date:</strong> ${movie.release_date}</p>
                <p>${movie.overview}</p>
              </div>
            </div>`
        )}
    </div>
        .join("")}
    `;
  }
}

customElements.define("movie-popular", MoviePopular);
