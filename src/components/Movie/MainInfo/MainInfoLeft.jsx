import { useDispatch } from 'react-redux';
import Rating from '../Rating'
import { addFavoritesMovie, removeFavoritesMovie } from '../../../Redux/slices/favoritesSlice';

function MainInfoLeft(props) {
    const dataFilm = props.filmInfo.film;
    const dispatch = useDispatch()
    return(
            <div className="main__info-left">
                <div className="main__info-left-buttons">
                <button className='main__info-left-favorite' onClick={() => dispatch(addFavoritesMovie(dataFilm))}>Favorite</button>
                <button className='main__info-left-favorite remove' onClick={() => dispatch(removeFavoritesMovie(dataFilm))}>Remove Favorite</button>
                </div>
                <div className="main__info-left-title">
                    <p>{dataFilm.title}</p>
                    <Rating />
                </div>
                <div className="main__info-left-categoryes">
                    {dataFilm.categoryes.map((value, index) => (

                            <p key={index}>{value}</p>

                    ))}
                </div>
                <div className="main__info-left-about">
                    <p>Description</p>
                    <p>
                        {
                            dataFilm.description
                        }
                    </p>
                </div>
            </div>
    )
}

export default MainInfoLeft