document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '1a52c27b49eaaf7b2e60876fc327a602';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            const moviesContainer = document.getElementById('movies-container');
            
            movies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('col-md-4', 'movie-card');
                
                movieElement.innerHTML = `
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top movie-poster" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.overview}</p>
                            <p class="card-text"><small class="text-muted">Release Date: ${movie.release_date}</small></p>
                        </div>
                    </div>
                `;
                
                moviesContainer.appendChild(movieElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    window.validateForm = () => {
        let valid = true;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name) {
            alert('Name is required.');
            valid = false;
        } else if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
            alert('Invalid email format.');
            valid = false;
        } else if (!message) {
            alert('Message is required.');
            valid = false;
        }

        if (valid) {
            alert('JavaScript validation passed.');
        }
    };

    new Vue({
        el: '#contactApp',
        data: {
            form: {
                name: '',
                email: '',
                message: '',
                subject: 'general',
                gender: '',
                terms: false
            }
        },
        methods: {
            validateWithFramework() {
                let valid = true;

                if (!this.form.name) {
                    alert('Name is required.');
                    valid = false;
                } else if (!this.form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
                    alert('Invalid email format.');
                    valid = false;
                } else if (!this.form.message) {
                    alert('Message is required.');
                    valid = false;
                }

                if (valid) {
                    alert('Vue.js validation passed.');
                }
            },
            submitForm() {
                if (this.form.name && this.form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/) && this.form.message) {
                    form.submit();
                } else {
                    alert('Please complete the form correctly.');
                }
            },
            resetForm() {
                this.form.name = '';
                this.form.email = '';
                this.form.message = '';
                this.form.subject = 'general';
                this.form.gender = '';
                this.form.terms = false;
            }
        }
    });
});
