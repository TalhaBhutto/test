import { FETCH_ALL, ADD_WATCHED, ADD_WATCHLIST, DELETE_W, DELETE_WL } from '../constants/actionTypes';

export default (movies = { Watched: [], Watchlist: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case DELETE_W:
            return movies.Watched.filter((movies) => movies._id !== action.payload);
        case DELETE_WL:
            return movies.Watchlist.filter((movies) => movies._id !== action.payload);
        case ADD_WATCHED:
            movies.Watched.push(action.payload);
        case ADD_WATCHLIST:
            movies.Watchlist.push(action.payload);
        default:
            return movies;
    }
};