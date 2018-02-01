import React from 'react'
import cls from './DetailedView.scss'
import InfoPanel from 'connected_components/InfoPanel'
import _get from 'lodash/get'
import {Redirect} from 'react-router-dom'
import FavouritesBar from 'connected_components/FavouritesBar'
import {NavLink} from 'react-router-dom'
import SearchIcon from 'mdi-react/MagnifyIcon'

function DetailedView(props) {
  const path = _get(props, 'match.path', null);
  const gemName = _get(props, 'match.params.gemName', null);
  let currentRoute = null;
  if (path === '/gem/:gemName' && gemName !== null)
    currentRoute = gemName;
  else if (path !== '/favourites')
    return <Redirect to='/'/>;
  return (
    <div className={cls.InfoPanelWrapper}>
      <div className={cls.Header}>
        <NavLink className={cls.SearchLink} to='/'>
          <SearchIcon/>
          <h3>
            Search Gems
          </h3>
        </NavLink>
        <FavouritesBar/>
      </div>
      <InfoPanel
        currentRoute={currentRoute}
      />
    </div>
  )
}

export default DetailedView