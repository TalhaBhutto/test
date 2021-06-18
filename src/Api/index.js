import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3/account/10632855/favorite/movies?api_key=4cf0702c3c6c89439443592604c7c7f0&session_id=fb862d604b9fb49a0e03fbd6e693611e41b06614'
})

export const fetchMovies = () => API.get();