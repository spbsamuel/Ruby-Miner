import {connect} from 'react-redux'
import FavouritesBar from './FavouritesBar'
import {viewFavourites} from 'store/reducers/dashboard/actions'

function mapStateToProps(state, props) {
  return ({})
}

function mapDispatchToProps(dispatch) {
  return ({
    viewFavourites: () => dispatch(viewFavourites())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesBar)