import React from 'react'
import PropTypes from 'prop-types'
import cls from './FavouritesBar.scss'
//import cx from 'classnames'
import HeartIcon from 'mdi-react/HeartIcon'

function FavouritesBar({viewFavourites}) {
  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    viewFavourites();
  };
  return (
    <a onClick={handleClick} href="/favourites">
      <div className={cls.FavouritesBar}>
        <h3>My Favourites</h3>
        <HeartIcon/>
      </div>
    </a>
  )
}

FavouritesBar.propTypes = {}

export default FavouritesBar