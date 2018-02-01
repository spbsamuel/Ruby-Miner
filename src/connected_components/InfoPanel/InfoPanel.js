import React from 'react'
import cls from './InfoPanel.scss'
import FavouritesPanel from './FavouritesPanel'
import RubyGemPanel from './RubyGemPanel'

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

function WelcomePanel() {
  return (
    <div>
      <h1>
        Ruby Gem Miner
      </h1>
      <p>Search for Ruby Gems fast and eloquently!</p>
      <h2>Features</h2>
      <ul>
        <li>Add Gems to your Favourites</li>
        <li>Save search queries</li>
        <li>Saved Gems are stored for offline reference</li>
        <li>Quick reference to Gem details in-page</li>
        <li>Open Gem details in new tab using CMD + Click</li>
        <li>Nested exploration of Gem dependencies</li>
      </ul>
    </div>
  )
}

export default InfoPanel