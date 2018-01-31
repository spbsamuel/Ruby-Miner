import React from 'react'
import cls from './Home.scss'
import {FavouritesBar, SearchBar, SearchResults, InfoPanel} from './components'

function Home() {
  return (
    <div className={cls.Home}>
      <div className={cls.SearchGroup}>
        <FavouritesBar/>
        <SearchBar/>
        <SearchResults/>
      </div>
      <div className={cls.InfoPanelWrapper}>
        <InfoPanel/>
      </div>
    </div>
  )
}


export default Home