import React from 'react'
import cls from './RubyGemPanel.scss'
import _get from 'lodash/get'
import LeftArrow from 'mdi-react/ChevronLeftIcon'
import _isEmpty from 'lodash/isEmpty'
import PageLoader from 'components/PageLoader'
import FavouriteButton from 'components/FavouriteButton'

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
    this.props.viewNestedDetailed(gemName);
    e.preventDefault();
  };

  toggleFavourite = () => {
    const {currentGem,favourites, setGemFavourites} = this.props;
    setGemFavourites(currentGem, !(currentGem in favourites), new Date());
  };

  render() {
    const {currentGem, gem, canGoBack, goBack, favourites} = this.props;
    const {version, info, authors, downloads} = gem;
    const runtime = _get(gem, 'dependencies.runtime', []);
    return (
      <div className={cls.RubyGemPanel}>
        <div className={cls.Header}>
          {canGoBack &&
          <button className={cls.BackButton} onClick={goBack}>
            <LeftArrow/><span>back</span>
          </button>}
        </div>
        <h1>
          {currentGem}
          <FavouriteButton
            isFavourite={currentGem in favourites}
            toggleFavourite={this.toggleFavourite}
          />
        </h1>
        {_isEmpty(gem) && <PageLoader/>}
        {_isEmpty(gem) ||
        <div>
          <p>Version: {version}</p>
          <p>{info}</p>
          <p>Authors: {authors}</p>
          <p>Downloads: {downloads.toLocaleString()}</p>
          <h3>Runtime Dependencies</h3>
          {runtime.length === 0 && 'none... :D'}
          <div className={cls.LinkList}>
            {runtime.map(({name, requirements}) =>
              <a
                className={cls.Links}
                onClick={this.handleClick(name)}
                key={name}
                href={`/gem/${name}`}
              >
                {name} {requirements}
              </a>
            )}
          </div>
        </div>}

      </div>
    )
  }
}

export default RubyGemPanel