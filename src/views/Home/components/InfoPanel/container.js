import {connect} from 'react-redux'
import InfoPanel from './InfoPanel'
import {viewNestedDetailed, goBack} from 'store/reducers/dashboard/actions'
import {requestRubyGem, searchRubyGems} from 'store/reducers/rubygems/actions'

function mapStateToProps(state, props) {
  const currentGemIndex = state.dashboard.inforPanelStack.length - 1;
  const currentGem = state.dashboard.inforPanelStack[currentGemIndex];
  return ({
    currentGem,
    canGoBack: state.dashboard.inforPanelStack.length > 1,
    favourites: state.rubygems.favourites,
    savedQueries: state.rubygems.savedQueries,
    gem: state.rubygems.gems[currentGem] || {}
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    goBack: () => dispatch(goBack()),
    viewNestedDetailed: gemName => dispatch(viewNestedDetailed(gemName)),
    requestRubyGem: gemName => dispatch(requestRubyGem(gemName)),
    searchRubyGems: searchQuery => dispatch(searchRubyGems(searchQuery))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel)