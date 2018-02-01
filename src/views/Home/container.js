import {connect} from 'react-redux'
import Home from './Home'
import {clearView} from 'store/reducers/dashboard/actions'

function mapStateToProps(state, props) {
  let stack = state.dashboard.inforPanelStack;
  return ({
    openDetailed: stack.length > 0,
  })
}

const mapActionToProps = {
  clearView
};

export default connect(mapStateToProps, mapActionToProps)(Home)