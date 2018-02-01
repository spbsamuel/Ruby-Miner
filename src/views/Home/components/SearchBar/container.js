import {connect} from 'react-redux'
import SearchBar from './SearchBar'
import {searchRubyGems, saveOrUnsaveSearchQuery} from 'store/reducers/rubygems/actions'
import {getUrlQueryByKey} from 'selectors/url_selectors'

const searchSelector = getUrlQueryByKey('query');
const pageSelector = getUrlQueryByKey('page');

function mapStateToProps(state, props) {
  return ({
    searchQuery: searchSelector(state),
    page: pageSelector(state),
    savedQueries: state.rubygems.savedQueries
  })
}

const mapActionToProps = {
    searchRubyGems,
    saveOrUnsaveSearchQuery,
};

export default connect(mapStateToProps, mapActionToProps)(SearchBar)