import React from 'react'
import PropTypes from 'prop-types'
import cls from './FavouritesPanel.scss'
import {NavLink} from 'react-router-dom'

function FavouritesPanel({favourites, savedQueries, viewNestedDetailed, searchRubyGems}) {
  const handleClick = gemName => e => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    viewNestedDetailed(gemName);
  };
  return (
    <div>
      <h1>Favourite Gems</h1>
      <div className={cls.LinkList}>
        {Object.keys(favourites).map(gemName =>
          <a
            onClick={handleClick(gemName)}
            key={gemName}
            href={`/gem/${gemName}`}
            className={cls.Links}
          >
            {gemName}
          </a>)}
      </div>
      <h1>Saved Queries</h1>
      <div className={cls.LinkList}>
        {Object.keys(savedQueries).map(searchQuery =>
          <NavLink
            key={searchQuery}
            to={`/?query=${searchQuery}`}
            className={cls.Links}
            onClick={() => searchRubyGems(searchQuery)}
          >
            {searchQuery}
          </NavLink>
        )}
      </div>
    </div>
  )
}

FavouritesPanel.propTypes = {}

export default FavouritesPanel