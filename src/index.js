const init = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const movieId = parseInt(
            document.getElementById('searchByID').value,
            10
        );

        fetch(`http://localhost:3000/movies/${movieId}`)
            .then((resp) => resp.json())
            .then((data) => {
                const movieTitleEl = document.querySelector('#movieDetails h4');
                const movieSummaryEl =
                    document.querySelector('#movieDetails p');

                movieTitleEl.textContent = `Title: ${data.title}`;
                movieSummaryEl.textContent = `Summary: ${data.summary}`;
            });
    });
};

document.addEventListener('DOMContentLoaded', init);
