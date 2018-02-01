import React from 'react'
import PropTypes from 'prop-types'
import cls from './DetailedView.scss'
//import cx from 'classnames'
import InfoPanel from 'connected_components/InfoPanel'
import _get from 'lodash/get'
import {Redirect} from 'react-router-dom'

function DetailedView(props) {
  const path = _get(props, 'match.path', null);
  const gemName = _get(props, 'match.params.gemName', null);
  let currentRoute = null;
  if (path === '/gem/:gemName' && gemName !== null)
    currentRoute = gemName;
  else if (path !== '/favourites')
    return <Redirect to='/'/>;
  return (
    <div className={cls.InfoPanelWrapper}>
      <InfoPanel
        currentRoute={currentRoute}
      />
    </div>
  )
}

DetailedView.propTypes = {};

export default DetailedView