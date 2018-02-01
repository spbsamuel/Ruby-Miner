import React from 'react'
import PropTypes from 'prop-types'
import cls from './RubyGemPanel.scss'
import _get from 'lodash/get'
import LeftArrow from 'mdi-react/ChevronLeftIcon'
import _isEmpty from 'lodash/isEmpty'
import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader
    height={200}
    width={300}
    speed={2}
    primaryColor={"#f3f3f3"}
    secondaryColor={"#ecebeb"}
  >
    <rect x="3" y="1" rx="3" ry="3" width="70" height="10"/>
    <rect x="2" y="20" rx="3" ry="3" width="300" height="10"/>
    <rect x="15" y="40" rx="3" ry="3" width="260" height="10"/>
    <rect x="15" y="60" rx="3" ry="3" width="200" height="10"/>
    <rect x="2" y="80" rx="3" ry="3" width="300" height="10"/>
    <rect x="15" y="100" rx="3" ry="3" width="260" height="10"/>
    <rect x="15" y="120" rx="3" ry="3" width="200" height="10"/>
  </ContentLoader>
);

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

  render() {
    const {currentGem, gem, canGoBack, goBack} = this.props;
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
        <h1>{currentGem}</h1>
        {_isEmpty(gem) && <Loader/>}
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

RubyGemPanel.propTypes = {}

export default RubyGemPanel