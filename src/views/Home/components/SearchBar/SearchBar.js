import React from 'react'
import cls from './SearchBar.scss'
import cx from 'classnames'
import SearchIcon from 'mdi-react/MagnifyIcon'
import SaveIcon from 'mdi-react/ContentSaveIcon'
import SaveOutlineIcon from 'mdi-react/ContentSaveOutlineIcon'
import debounce from 'lodash/debounce'

class SearchBar extends React.Component {
  static defaultProps = {
    searchQuery: '',
    page: 0,
    savedQueries: {}
  };

  constructor(props) {
    super(props);
    const {searchQuery, searchRubyGems} = props;
    this.state = {searchQuery: searchQuery || ''};
    this.reduxSearchQuery = debounce(query => searchRubyGems(query), 300)
  }

  componentDidMount() {
    const {searchQuery, page, searchRubyGems} = this.props;
    searchRubyGems(searchQuery, page)
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
    const isSaved = this.state.searchQuery in this.props.savedQueries;
    const {searchQuery} = this.state;
    return (
      <div className={cls.SearchBarContainer}>
        <div className={cls.SearchBar}>
          <SearchIcon/>
          <input value={searchQuery} onChange={this.searchQueryHandler} className={cls.SearchInput}/>
        </div>
        <button disabled={!searchQuery} className={cx(cls.SaveButton, {[cls.Hide]: isSaved })} onClick={() => this.props.saveOrUnsaveSearchQuery(this.state.searchQuery, !isSaved, new Date())}>
          {isSaved ? <SaveIcon/> : <SaveOutlineIcon/>}
          <span>{isSaved ? 'Un-save' : 'Save'}</span>
        </button>
      </div>
    )
  }
}

export default SearchBar