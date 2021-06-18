import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css'

function NavBar() {
    return (
        <div className={css.root}>
            <div className={css.title}>
                WatchList
            </div>
            <div className={css.nav}>
                <div className={css.navItem}>
                    <NavLink to="/Watchlist" className={css.navItemNav} > <p>WatchList</p></NavLink>
                </div>
                <div className={css.navItem}>
                    <NavLink to="/Watched" className={css.navItemNav}>Watched</NavLink>
                </div>
                <div className={`${css.navItem} ${css.addButton}`}>
                    <NavLink to="/" className={css.navItemNav2}>+ ADD</NavLink>
                </div>
            </div>
        </div >
    )
}

export default NavBar
