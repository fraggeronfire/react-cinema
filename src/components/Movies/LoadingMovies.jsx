import SkeletonFilm from "../Skeletons/SkeletonFilm";

const LoadingMovies = () => {
    return [... new Array(19)].map((_, index) => <SkeletonFilm key={index}/> )
}

export default LoadingMovies