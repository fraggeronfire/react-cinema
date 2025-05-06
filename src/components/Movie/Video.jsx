import { useSelector } from "react-redux"
import { searchParamInYoutube } from "../../tools/searchParamInYoutube"
import SkeletonVideo from "../Skeletons/SkeletonVideo"

function Video() {

    const { searchFilm, status } = useSelector(store => store.movies)

    if(status === 'loading'){
        return (
            <div className="video-wrapper">
                <SkeletonVideo />
            </div>
        )
            
        
    }
    const trailerUrl = searchFilm?.film?.trailerUrl
    const videoURL = trailerUrl ? searchParamInYoutube(trailerUrl) : ''

    return (
        <>
         {
                <div className="video-wrapper">
                <iframe
                    width="100%"
                    height="700"
                    src={`https://www.youtube.com/embed/${videoURL}`}
                    title="Youtube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                >
                </iframe>
            </div>
        }
        </>
    )
}

export default Video