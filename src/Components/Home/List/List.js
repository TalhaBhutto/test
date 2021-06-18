import React from 'react'
import css from './List.module.css';

function List(props) {
    return (
        <div className={css.root}>
            <div className={css.imgDiv}>
                <img src={`https:/${props.data?.poster_path}`}></img>
            </div>
            <div className={css.Data}>
                <div className={css.title}>
                    {props.data.title}
                </div>
                <div className={css.date}>
                    {props.data.release_date}
                </div>
                <div className={css.Buttons}>
                    <button className={css.addButton}>ADD TO WATCHLIST</button>
                    <button className={css.addButton}>ADD TO WATCHED</button>
                </div>
            </div>
        </div>
    )
}

export default List
