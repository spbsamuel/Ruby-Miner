import React from 'react'
import PropTypes from 'prop-types'
import cls from './SearchBar.scss'
//import cx from 'classnames'
import SearchIcon from 'mdi-react/MagnifyIcon'
import debounce from 'lodash/debounce'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const {searchQuery, searchRubyGems} = props;
    this.state = {searchQuery: searchQuery || ''};
    this.reduxSearchQuery = debounce(query => searchRubyGems(query), 300)
  }

  componentWillReceiveProps(props) {
    const {searchQuery} = props;
    this.setState({searchQuery: searchQuery || ''});
  }

  searchQueryHandler = e => {
    const searchQuery = e.target.value;
    this.setState({searchQuery: e.target.value}, () => this.reduxSearchQuery(searchQuery));
  };

  render() {
    return (
      <div className={cls.SearchBar}>
        <SearchIcon/>
        <input onChange={this.searchQueryHandler} className={cls.SearchInput}/>
      </div>
    )
  }
}

SearchBar.propTypes = {};

export default SearchBar