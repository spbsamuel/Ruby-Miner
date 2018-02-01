import React from 'react'
import PropTypes from 'prop-types'
import cls from './FavouritesBar.scss'
import HeartIcon from 'mdi-react/HeartIcon'
import SaveIcon from 'mdi-react/ContentSaveIcon'

function FavouritesBar({viewFavourites, favourites, savedQueries}) {
  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    viewFavourites();
  };
  return (
    <a onClick={handleClick} href="/favourites">
      <div className={cls.FavouritesBar}>
        <h3>My Favourites</h3>
        <div>
          <span>
            {Object.keys(savedQueries).length}
          </span>
          <SaveIcon/>
          <span>
            {Object.keys(favourites).length}
          </span>
          <HeartIcon/>
        </div>
      </div>
    </a>
  )
}

FavouritesBar.propTypes = {}

export default FavouritesBar