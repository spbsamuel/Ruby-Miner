import React from 'react'
import PropTypes from 'prop-types'
import cls from './InfoPanel.scss'
import _get from 'lodash/get'

//import cx from 'classnames'

function InfoPanel({currentGem, ...props}) {
  let CurrentPanel = WelcomePanel;
  if (currentGem === null) CurrentPanel = FavouritesPanel;
  if (typeof currentGem === 'string') CurrentPanel = RubyGemPanel;
  return (
    <div className={cls.InfoPanel}>
      <CurrentPanel
        currentGem={currentGem}
        {...props}
      />
    </div>
  )
}

function FavouritesPanel({favourites, savedQueries, viewNestedDetailed, searchRubyGems}) {
  const handleClick = gemName => e => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    viewNestedDetailed(gemName);
  };
  return (
    <div>
      <h1>Favourite Gems</h1>
      {Object.keys(favourites).map(gemName =>
        <a
          onClick={handleClick(gemName)}
          key={gemName}
          href={`/gem/${gemName}`}
          style={{display:'block'}}
        >
          {gemName}
        </a>)}
      <h1>Saved Queries</h1>
      {Object.keys(savedQueries).map(searchQuery =>
        <p
          key={searchQuery}
          onClick={() => searchRubyGems(searchQuery)}
        >
          {searchQuery}
        </p>
      )}
    </div>
  )
}

class RubyGemPanel extends React.Component {
  componentDidMount() {
    const {requestRubyGem, currentGem} = this.props;
    requestRubyGem(currentGem);
  }

  componentWillReceiveProps(nextProps) {
    const {requestRubyGem, currentGem} = this.props;
    const {currentGem: nextGem} = nextProps;
    if (currentGem !== nextGem) requestRubyGem(nextGem)
  }

  handleClick = gemName => e => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    this.props.viewNestedDetailed(gemName);
  };

  render() {
    const {currentGem, gem, canGoBack, viewNestedDetailed, goBack} = this.props;
    const {version, info, authors, downloads} = gem;
    const runtime = _get(gem, 'dependencies.runtime', []);
    return (
      <div>
        {canGoBack && <button onClick={goBack}> Go Back</button>}
        <h1>{currentGem}</h1>
        <p>{version}</p>
        <p>{info}</p>
        <p>Authors: {authors}</p>
        <p>Downloads: {downloads}</p>
        {runtime.map(({name, requirements}) =>
          <a onClick={this.handleClick(name)} key={name} href={`/gem/${name}`} style={{display:'block'}}>{name} {requirements}</a>
        )}
      </div>
    )
  }
}

function WelcomePanel() {
  return (
    <div>WelcomePanel</div>
  )
}

InfoPanel.propTypes = {};

export default InfoPanel