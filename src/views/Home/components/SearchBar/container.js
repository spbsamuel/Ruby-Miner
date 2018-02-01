import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import {searchRubyGems, saveOrUnsaveSearchQuery} from 'store/reducers/rubygems/actions'

function mapStateToProps(state, props) {
  return ({
    searchQuery: state.rubygems.searchQuery,
    savedQueries: state.rubygems.savedQueries
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    searchRubyGems: searchQuery => dispatch(searchRubyGems(searchQuery)),
    saveOrUnsaveSearchQuery: (searchQuery, save, time) => dispatch(saveOrUnsaveSearchQuery(searchQuery, save, time))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)