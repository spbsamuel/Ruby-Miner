export const VIEW_DETAILED = 'VIEW_DETAILED';

export function viewDetailed(gemName) {
  return ({
    type: VIEW_DETAILED,
    gemName
  })
}

export const VIEW_FAVOURITES = 'VIEW_FAVOURITES';

export function viewFavourites() {
  return ({
    type: VIEW_FAVOURITES
  })
}
