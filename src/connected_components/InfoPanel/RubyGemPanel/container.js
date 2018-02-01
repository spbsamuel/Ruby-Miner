import {connect} from 'react-redux'
import RubyGemPanel from './RubyGemPanel'
import {setGemFavourites} from 'store/reducers/rubygems/actions'

function mapStateToProps(state, props) {
  return ({
    favourites: state.rubygems.favourites
  })
}

const mapActionToProps = {
  setGemFavourites,
};

export default connect(mapStateToProps, mapActionToProps)(RubyGemPanel)