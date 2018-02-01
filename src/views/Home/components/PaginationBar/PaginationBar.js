import React from 'react'
import cls from './PaginationBar.scss'
import LeftIcon from 'mdi-react/ChevronLeftIcon'
import RightIcon from 'mdi-react/ChevronRightIcon'

function PaginationBar({page, results, searchQuery, searchRubyGems}) {
  let pageNo = parseInt(page);
  pageNo = isNaN(pageNo) ? 1 : pageNo;
  const nextPage = () => {
    searchRubyGems(searchQuery, Math.max(pageNo + 1, 2))
  };
  const prevPage = () => {
    searchRubyGems(searchQuery, Math.max(pageNo - 1, 1))
  };
  return (
    <div className={cls.PaginationBar}>
      <button onClick={prevPage} disabled={pageNo <= 1 || !searchQuery} className={cls.PaginationBtn}>
        <LeftIcon/>
        <span>
          Prev Page
        </span>
      </button>
      <button onClick={nextPage} disabled={results.length < 30 || !searchQuery} className={cls.PaginationBtn}>
        <span>
          Next Page
        </span>
        <RightIcon/>
      </button>
    </div>
  )
}

export default PaginationBar