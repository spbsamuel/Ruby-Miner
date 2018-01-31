import {connect} from 'react-redux'
import InfoPanel from './InfoPanel'

function mapStateToProps(state, props) {
  return ({
    currentGem: state.dashboard.currentGem,
    gem: state.rubygems.gems[state.dashboard.currentGem] || {}
  })
}

function mapDispatchToProps(dispatch) {
  return ({

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel)