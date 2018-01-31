import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import {searchRubyGems} from 'store/reducers/search/actions'

function mapStateToProps(state, props) {
  return ({
    searchQuery: state.search.searchQuery
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    searchRubyGems: searchQuery => dispatch(searchRubyGems(searchQuery))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)