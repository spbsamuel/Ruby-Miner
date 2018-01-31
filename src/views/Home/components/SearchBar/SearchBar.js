import React from 'react'
import PropTypes from 'prop-types'
import cls from './SearchBar.scss'
//import cx from 'classnames'
import SearchIcon from 'mdi-react/MagnifyIcon'

function SearchBar() {
  return (
    <div className={cls.SearchBar}>
      <SearchIcon/>
      <input className={cls.SearchInput}/>
    </div>
  )
}

SearchBar.propTypes = {};

export default SearchBar