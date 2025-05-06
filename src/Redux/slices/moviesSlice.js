import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    films: [],
    filmsCategory: [],
    status: null,
    errors: null,
    searchFilm: {
        film: null,
        status: 'loading',
        error: null
    },
    filteredMovies: [],
    filteredMoviesCategoryes: []
}

export const fetchMovies = createAsyncThunk('movie/fetchmovies', () => {
    return axios.get('https://67f3d009cbef97f40d2c32c1.mockapi.io/ReactCinema')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            let errorMessage = '';
            switch(error.status) {
                case 500:
                    errorMessage = "error on server" 

                break;

                default:
                    break;
            }
            console.error(error);
            throw new Error(errorMessage);
        })
});

const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        searchFilmInState: (state, action) => {
            const { id } = action.payload;
            const searchFilm = state.films.find(film => film.id === id);
            state.searchFilm.film = searchFilm;
            state.searchFilm.status = 'fulfilled';
        },
        filterMovies: (state, action) => {
            if(action.payload === '') {
                state.filteredMovies = []
            } else {
                const searchTerm = action.payload.toLowerCase()
                state.filteredMovies = state.films.filter(movie => movie.title.toLowerCase().includes(searchTerm))
            }
        },
        searchCategoryesFilms: (state, action) => {
            if(action.payload === 'All'){
                state.filteredMoviesCategoryes = []
            }
            const searchFilms = state.films.filter((value) => value.category.includes(action.payload))
            state.filteredMoviesCategoryes = searchFilms
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.films = action.payload;
                state.filmsCategory = [...new Set(action.payload.flatMap((value) => value.category))]
                state.status = 'fulfilled';
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'loading';
                state.errors = action.error.message
                console.error(action.error.message)
            })
    }
})

export default moviesSlice.reducer;
export const { searchFilmInState, filterMovies, searchCategoryesFilms } = moviesSlice.actions;