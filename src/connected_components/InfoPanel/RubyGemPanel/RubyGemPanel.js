import React from 'react'
import PropTypes from 'prop-types'
import cls from './RubyGemPanel.scss'
import _get from 'lodash/get'
import LeftArrow from 'mdi-react/ChevronLeftIcon'
import _isEmpty from 'lodash/isEmpty'

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
        {_isEmpty(gem) ||
        <div>
          <p>Version: {version}</p>
          <p>{info}</p>
          <p>Authors: {authors}</p>
          <p>Downloads: {downloads.toLocaleString()}</p>
          <h3>Runtime Dependencies</h3>
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