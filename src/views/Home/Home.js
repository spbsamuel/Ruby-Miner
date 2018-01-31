import React from 'react'
import cls from './Home.scss'
import cx from 'classnames'
import SearchIcon from 'mdi-react/MagnifyIcon'
import HeartIcon from 'mdi-react/HeartIcon'

function Home() {
  return (
    <div className={cls.Home}>
      <div className={cls.SearchGroup}>
        <FavouritesBar/>
        <SearchBar/>
        <SearchResults/>
      </div>
      <div className={cls.InfoPanelWrapper}>
        <InfoPanel />
      </div>
    </div>
  )
}

function SearchBar() {
  return (
    <div className={cls.SearchBar}>
      <SearchIcon/>
      <input className={cls.SearchInput}/>
    </div>
  )
}

function SearchResults() {
  return (
    <div className={cls.SearchResults}>
      SearchResults
    </div>
  )
}

function InfoPanel() {
  return (
    <div className={cls.InfoPanel}>
      InfoPanel
    </div>
  )
}

function FavouritesBar() {
  return (
    <div className={cls.FavouritesBar}>
      <h3>My Favourites</h3>
      <HeartIcon/>
    </div>
  )
}

export default Home