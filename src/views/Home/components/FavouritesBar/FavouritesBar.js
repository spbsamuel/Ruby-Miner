import React from 'react'
import PropTypes from 'prop-types'
import cls from './FavouritesBar.scss'
//import cx from 'classnames'
import HeartIcon from 'mdi-react/HeartIcon'

function FavouritesBar() {
  return (
    <div className={cls.FavouritesBar}>
      <h3>My Favourites</h3>
      <HeartIcon/>
    </div>
  )
}

FavouritesBar.propTypes = {}

export default FavouritesBar