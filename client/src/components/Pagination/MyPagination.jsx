/* import React, { memo, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPagesPages } from '../../redux/action/postAc';

function MyPagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPagesPages(currentPage))

  }, [currentPage])
  const page = useSelector(state => state.page)

  console.log('s', page, currentPage);


  console.log('Pagination')
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination" style={{ cursor: 'pointer' }} >
        {page.map(el =>
          <li className="page-item" key={el} onClick={() => setCurrentPage(el)}>
            <a className="page-link" style={{ color: currentPage == el ? 'red' : null }} >{el + 1}</a>
          </li>
        )}
      </ul>
    </nav>
  );
}



export default memo(MyPagination) */