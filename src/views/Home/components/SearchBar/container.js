import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import {searchRubyGems, saveOrUnsaveSearchQuery} from 'store/reducers/rubygems/actions'

function mapStateToProps(state, props) {
  return ({
    searchQuery: state.rubygems.searchQuery,
    savedQueries: state.rubygems.savedQueries
  })
}

const mapActionToProps = {
    searchRubyGems,
    saveOrUnsaveSearchQuery,
};

export default connect(mapStateToProps, mapActionToProps)(SearchBar)