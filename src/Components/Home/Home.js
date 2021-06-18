import React, { useState, useEffect } from 'react'
import css from './Home.module.css'
import { getMovies } from '../../Actions/watch';
import { useDispatch, useSelector } from 'react-redux';
import List from './List/List';
import { CircularProgress } from '@material-ui/core';


function Home() {
    const dispatch = useDispatch();
    const [go, setGo] = useState(false)
    useEffect(() => {
        dispatch(getMovies());
    }, [])
    const movies = useSelector(state => state.watch);
    console.log(movies);
    // if (movies.results) {
    //     setGo(true)
    // }
    return (
        <div>
            {/* {!go ? <CircularProgress /> : ( */}
            {movies?.results?.map((movie) => <List data={movie} />)
            }
            {/* <List data={movies.results[0]} /> */}
        </div>
    )
}

export default Home
