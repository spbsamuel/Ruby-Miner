import React from 'react'
import cls from './Home.scss'
import {SearchBar, SearchResults} from './components'
import InfoPanel from 'connected_components/InfoPanel'
import FavouritesBar from 'connected_components/FavouritesBar'
import Modal from 'react-responsive-modal'

function Home({openDetailed, clearView}) {
  return (
    <div className={cls.Home}>
      <div className={cls.SearchGroup}>
        <FavouritesBar/>
        <SearchBar/>
        <SearchResults/>
      </div>
      <div className={cls.InfoPanelWrapper}>
        <InfoPanel/>
      </div>
      <Modal classNames={{overlay: cls.Modal, modal: cls.Modal}} onClose={clearView} open={openDetailed}>
        <div className={cls.ModalWrapper}>
          <InfoPanel/>
        </div>
      </Modal>
    </div>
  )
}


export default Home