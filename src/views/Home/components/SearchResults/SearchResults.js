import React from 'react'
import PropTypes from 'prop-types'
import cls from './SearchResults.scss'
//import cx from 'classnames'

function SearchResults({results}) {
  console.log(results);
  return (
    <div className={cls.SearchResults}>
      {results.map(item =>
        <p key={item.name} >{item.name}</p>
      )}
    </div>
  )
}

SearchResults.propTypes = {};

export default SearchResults