import {connect} from 'react-redux'
import InfoPanel from './InfoPanel'
import {viewNestedDetailed, goBack} from 'store/reducers/dashboard/actions'
import {requestRubyGem, searchRubyGems} from 'store/reducers/rubygems/actions'

function mapStateToProps(state, props) {
  const {currentRoute} = props;
  const stack = state.dashboard.inforPanelStack.slice();
  if (currentRoute !== undefined) stack[0] = currentRoute;
  const currentGemIndex = stack.length - 1;
  const currentGem = stack[currentGemIndex];
  return ({
    currentGem,
    canGoBack: stack.length > 1,
    favourites: state.rubygems.favourites,
    savedQueries: state.rubygems.savedQueries,
    gem: state.rubygems.gems[currentGem] || {}
  })
}

const mapActionToProps = {
  goBack,
  viewNestedDetailed,
  requestRubyGem,
  searchRubyGems,
};

export default connect(mapStateToProps, mapActionToProps)(InfoPanel)