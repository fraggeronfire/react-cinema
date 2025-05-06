import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FavoriteMoviesList from "./FavoriteMoviesList";
import LoadingMovies from "./LoadingMovies";
import MoviesCards from "./MoviesCards";

function MoviesList() {

    const path = useLocation()
    const { films, status, filteredMovies, filteredMoviesCategoryes } = useSelector(store => store.movies)
    const { favoritesMovies } = useSelector(store => store.favorites)

    return (
        <div id="movies" className="movies anchor">
              {
                path.pathname === '/favorites' ? (
                    <FavoriteMoviesList favorites={{favoritesMovies, filteredMovies, filteredMoviesCategoryes}}/>
                ) : status === 'loading' ? (
                    <LoadingMovies />
                ) : (
                    <MoviesCards films={{ films, filteredMovies, filteredMoviesCategoryes }} />
                )
              } 
        </div>
    );
}

export default MoviesList