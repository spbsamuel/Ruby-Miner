import React from 'react'
import PropTypes from 'prop-types'
import cls from './SearchResults.scss'
import NotFollowingIcon from 'mdi-react/HeartOutlineIcon'
import FollowingIcon from 'mdi-react/HeartIcon'

//import cx from 'classnames'

function SearchResults({results, gems, favourites, viewDetailed, setGemFavourites}) {
  return (
    <div className={cls.SearchResults}>
      {results.map(name =>
        <SearchItem
          key={name}
          {...gems[name]}
          viewDetailed={viewDetailed}
          isFavourite={name in favourites}
          toggleFavourite={setGemFavourites}
        />
      )}
    </div>
  )
}

function SearchItem({
  name,
  downloads,
  version,
  info,
  isFavourite,
  viewDetailed,
  toggleFavourite
}) {
  const handleClick = () => viewDetailed(name);
  const handleFavourite = (e) => {
    e.stopPropagation();
    toggleFavourite(name, !isFavourite)
  };
  return (
    <div onClick={handleClick} className={cls.SearchItem}>
      <div>
        <p><strong>{name}</strong>{version}</p>
        <p>{info.slice(0,80)}</p>
      </div>
      <div>
        <p><strong>{downloads}</strong></p>
        <p>Downloads</p>
      </div>
      <div onClick={handleFavourite}>
        {isFavourite ? <FollowingIcon/>: <NotFollowingIcon/>}
      </div>
    </div>
  )
}

SearchResults.propTypes = {};

export default SearchResults