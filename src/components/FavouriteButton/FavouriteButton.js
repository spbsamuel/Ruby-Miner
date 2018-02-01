import React from 'react'
import NotFollowingIcon from 'mdi-react/HeartOutlineIcon'
import FollowingIcon from 'mdi-react/HeartIcon'

function FavouriteButton({isFavourite, toggleFavourite}) {
  return isFavourite ? <FollowingIcon onClick={toggleFavourite}/> : <NotFollowingIcon onClick={toggleFavourite}/>
}

export default FavouriteButton