import {connect} from 'react-redux'
import PaginationBar from './PaginationBar'
import {searchRubyGems} from 'store/reducers/rubygems/actions'
import {getUrlQueryByKey} from 'selectors/url_selectors'

const pageSelector = getUrlQueryByKey('page');
const searchSelector = getUrlQueryByKey('query');

function mapStateToProps(state, props) {
  return ({
    searchQuery: searchSelector(state),
    page: pageSelector(state),
    results: state.rubygems.results,
  })
}

const mapActionToProps = {
  searchRubyGems
};

export default connect(mapStateToProps, mapActionToProps)(PaginationBar)