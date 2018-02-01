import {connect} from 'react-redux'
import FavouritesBar from './FavouritesBar'
import {viewFavourites} from 'store/reducers/dashboard/actions'

function mapStateToProps(state, props) {
  return ({
    favourites: state.rubygems.favourites,
    savedQueries: state.dashboard.savedQueries
  })
}

const mapActionsToProps = {
  viewFavourites
};



export default connect(mapStateToProps, mapActionsToProps)(FavouritesBar)