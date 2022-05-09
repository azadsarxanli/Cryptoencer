import React, { useState } from "react";

import "../assets/css/Pagination.css";

const Pagination = (props) => {
  const nOfPages = [];
  const [currentBlock, setCurrentBlock] = useState(0);
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    nOfPages.push(i);
  }
  const indexofFirstBlock_n = currentBlock * 3;
  const indexofLastBlock_n = indexofFirstBlock_n + 3;

  const block = nOfPages.slice(indexofFirstBlock_n, indexofLastBlock_n)

  const paginate = (e) => {
    e.preventDefault();
    console.log(e.target.tagName)
    if(e.target.tagName === 'A') {
      console.log(e.target, 'anchor')
      props.paginate(+e.target.innerHTML);
    }else{
      console.log(e.target, 'list')
      props.paginate(+e.target.children[0].innerHTML)
    }
    
  };

  const backward = () => {
    if (currentBlock > 0) setCurrentBlock(prev => prev - 1)
  }
  const forward = () => {
    if (currentBlock < Math.round(((props.totalItems / props.itemsPerPage) / 3))) setCurrentBlock(prev => prev + 1)
  }

  return (
    <nav className="page-navigation">
      <ul className="page-list">
        <li className="page-item-backward" style={{ cursor: 'pointer' }} onClick={backward}>«</li>
        {block.map((number) => (
          <li key={number} className="page-item">
            <a onClick={paginate}
              href=""
              className={
                number === props.currentPage
                  ? "page-item-link active"
                  : "page-item-link"
              }
              
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item-forward" style={{ cursor: 'pointer' }} onClick={forward}>»</li>
      </ul>
    </nav>
  );
};

export default Pagination;