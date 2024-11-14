import axios from 'axios';

export const fetchMovies = (searchTerm) => {
    return async (dispatch) => {
        const movies = await axios({
            method: 'GET',
            url: `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`,
        });
        dispatch({
            type: 'SET_MOVIES',
            movies: movies.data.Search,
        });
    }
}
