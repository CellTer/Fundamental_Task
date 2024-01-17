class Footer extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <style>
        .footer {
          background-color: black; /* Mengatur latar belakang menjadi hitam */
          color: white; /* Mengatur warna teks menjadi putih */
          padding: 50px; /* Menambahkan ruang di sekitar konten footer */
          text-align: center; /* Menengahkan teks di dalam footer */
        }
      </style>
      <div class="footer">
      <h2> @MovieUp </h2>
      </div>`;
    }
  }
  
  customElements.define("foo-ter", Footer);
  