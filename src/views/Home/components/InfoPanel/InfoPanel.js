import React from 'react'
import PropTypes from 'prop-types'
import cls from './InfoPanel.scss'
//import cx from 'classnames'

function InfoPanel({currentGem, gem={}}) {
  const {name, version, info, dependencies, authors, downloads} = gem;
  const runtime = dependencies && dependencies.runtime || [];
  return (
    <div className={cls.InfoPanel}>
      InfoPanel
      currentGem = {currentGem || 'Favourites'}
      <h1>{name}</h1>
      <p>{version}</p>
      <p>{info}</p>
      <p>Authors: {authors}</p>
      <p>Downloads: {downloads}</p>
      {runtime.map(({name, requirements})=>
        <p key={name}>{name} {requirements}</p>
      )}
    </div>
  )
}

InfoPanel.propTypes = {};

export default InfoPanel