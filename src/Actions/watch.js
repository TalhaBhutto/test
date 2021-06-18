import { FETCH_ALL, ADD_WATCHED, ADD_WATCHLIST, DELETE_W, DELETE_WL } from '../constants/actionTypes';
import { fetchMovies } from '../Api/index';
import axios from 'axios';


export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://api.themoviedb.org/3/account/10632855/favorite/movies?api_key=4cf0702c3c6c89439443592604c7c7f0&session_id=fb862d604b9fb49a0e03fbd6e693611e41b06614');
        dispatch({ type: FETCH_ALL, payload: data });
    }
    catch (error) {
        console.log(error);
    }
}