import React from 'react'
import cls from './SearchResults.scss'
import NotFollowingIcon from 'mdi-react/HeartOutlineIcon'
import FollowingIcon from 'mdi-react/HeartIcon'
import { List } from 'react-content-loader'

function SearchResults({results, searchPending, gems, favourites, viewDetailed, setGemFavourites}) {
  return (
    <div className={cls.SearchResults}>
      {searchPending && <List width={250}/>}
      {!searchPending && results.map(name =>
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
  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    viewDetailed(name);
  };
  const handleFavourite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavourite(name, !isFavourite, new Date())
  };
  return (
    <a onClick={handleClick} href={`/gem/${name}`}>
      <div className={cls.SearchItem}>
        <div className={cls.Description}>
          <p><strong>{name}</strong> {version}</p>
          <p>{info.slice(0, 80) + '...'}</p>
        </div>
        <div className={cls.Stats}>
          <p><strong>{downloads.toLocaleString()}</strong></p>
          <p>Downloads</p>
        </div>
        <div className={cls.FollowBtn}>
          {isFavourite ?
            <FollowingIcon
              onClick={handleFavourite}
            />
            : <NotFollowingIcon
              onClick={handleFavourite}
            />}
        </div>
      </div>
    </a>
  )
}

export default SearchResults