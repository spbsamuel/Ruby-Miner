import {connect} from 'react-redux'
import SearchResults from './SearchResults'

function mapStateToProps(state, props) {
  return ({
    results: state.search.results
  })
}


export default connect(mapStateToProps)(SearchResults)