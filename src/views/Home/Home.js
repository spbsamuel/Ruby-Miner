import React from 'react'
import cls from './Home.scss'
import {FavouritesBar, SearchBar, SearchResults} from './components'
import InfoPanel from 'connected_components/InfoPanel'

function Home(props) {
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