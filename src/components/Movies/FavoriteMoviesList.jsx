import MoviesCard from "./MoviesCard"

const FavoriteMoviesList = ( {favorites} ) => {

    // favoritesMovies, filteredMovies, filteredMoviesCategoryes

    let moviesToShow = []

    if(favorites.filteredMovies.length > 0) {
        moviesToShow = favorites.filteredMovies.filter(searchFilms => {
            return favorites.favoritesMovies.some(searchTitle => searchTitle.title === searchFilms.title)
        })
    } else if(favorites.filteredMoviesCategoryes.length > 0){
        moviesToShow = favorites.filteredMoviesCategoryes.filter(searchFilms => {
            return favorites.favoritesMovies.some(searchTitle => searchTitle.title === searchFilms.title)
        })

    } else if (favorites.favoritesMovies.length === 0) {
        return <p className="favorite__movies-none">You don't have any favorite movies</p>
    } else {
        moviesToShow = favorites.favoritesMovies
    }

    return moviesToShow.map((value, index) => (
    <MoviesCard key={index} {...value} />
))
}

export default FavoriteMoviesList

