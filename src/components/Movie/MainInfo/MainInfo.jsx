import { useDispatch, useSelector } from 'react-redux'
import MainInfoLeft from "./MainInfoLeft"
import MainInfoRight from "./MainInfoRight"
import { useParams } from 'react-router-dom'
import { searchFilmInState } from '../../../Redux/slices/moviesSlice'
import { useEffect } from 'react'



function MainInfo() {

    const id = useParams()
    const dispatch = useDispatch()

    const { searchFilm, status } = useSelector(store => store.movies)

    useEffect(() => {
        if(status === 'fulfilled') {
            dispatch(searchFilmInState(id))
        }
    }, [dispatch, status])

    return(
        <div className="main__info">
            {searchFilm.status === 'loading' ? (
                <p>Loading...</p>
            ) : (
                <>
                    <MainInfoLeft filmInfo={{...searchFilm}} />
                    <MainInfoRight filmInfo={{...searchFilm}} />
                </>
            )}
        </div>
    );
}

export default MainInfo