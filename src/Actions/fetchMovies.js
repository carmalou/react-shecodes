export default function fetchMovies() {
    return window.fetch('https://fayepi.herokuapp.com/romcoms')
    .then(function(response) {
        return response.json();
    })
}