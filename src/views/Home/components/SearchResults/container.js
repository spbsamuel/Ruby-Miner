import {connect} from 'react-redux'
import SearchResults from './SearchResults'
import {viewDetailed} from 'store/reducers/dashboard/actions'
import {setGemFavourites} from 'store/reducers/rubygems/actions'

function mapStateToProps(state, props) {
  return ({
    results: state.rubygems.results,
    gems: state.rubygems.gems,
    favourites: state.rubygems.favourites
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    viewDetailed: gemName => dispatch(viewDetailed(gemName)),
    setGemFavourites: (gemName, setFavourite, time) => dispatch(setGemFavourites(gemName, setFavourite, time))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)