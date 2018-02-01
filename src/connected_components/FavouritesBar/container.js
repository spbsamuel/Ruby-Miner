import {connect} from 'react-redux'
import FavouritesBar from './FavouritesBar'
import {viewFavourites} from 'store/reducers/dashboard/actions'
import _get from 'lodash'

function mapStateToProps(state, props) {
  return ({
    favourites: state.rubygems.favourites || {},
    savedQueries: state.rubygems.savedQueries || {},
  })
}

const mapActionsToProps = {
  viewFavourites
};



export default connect(mapStateToProps, mapActionsToProps)(FavouritesBar)