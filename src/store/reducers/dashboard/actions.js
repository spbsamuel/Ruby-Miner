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


export const VIEW_NESTED_DETAILED = 'VIEW_NESTED_DETAILED';

export function viewNestedDetailed(gemName) {
  return ({
    type: VIEW_NESTED_DETAILED,
    gemName
  })
}


export const POP_NESTED_VIEW = 'POP_NESTED_VIEW';

export function goBack() {
  return ({
    type: POP_NESTED_VIEW,
  })
}

export const CLEAR_VIEW = 'CLEAR_VIEW';

export function clearView() {
  return ({
    type: CLEAR_VIEW,
  })
}