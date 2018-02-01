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

const mapActionToProps = {
    viewDetailed,
    setGemFavourites,
};

export default connect(mapStateToProps, mapActionToProps)(SearchResults)