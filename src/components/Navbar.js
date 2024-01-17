import "../components/SearchMovie.js";

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .topnav {
          overflow: hidden;
          background-color: #333;
          padding: 10px 0; /* Padding atas dan bawah yang lebih besar */
        }

        .topnav a {
          float: left;
          display: block;
          color: white;
          text-align: center;
          padding: 10px 16px; /* Padding yang lebih kecil */
          text-decoration: none;
          font-size: 35px; /* Ukuran font yang lebih besar */
          font-weight: bold; /* Tebal */
          text-transform: uppercase; /* Huruf kapital */
          letter-spacing: 2px; /* Jarak antar huruf */
        }

        .topnav a:hover {
          background-color: #ddd;
          color: black;
        }
      </style>
      <div class="topnav">
        <a href="/">MovieUp</a>
        <search-movie style="float:right;"></search-movie> 
      </div>`;
  }
}

customElements.define("nav-bar", Navbar);
