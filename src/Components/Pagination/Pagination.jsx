import React from "react";

function Pagination({cardsPerPage, totalCards, paginate}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }
   
  return (
    <ul className="pagination d-flex flex-wrap mt-5 mb-2">
        {
           pageNumbers.map(number => (
               <li className="page-item" key={number}>
                   <a href="#" className="page-link" onClick={() => paginate(number)} >{number}</a>
               </li>
           )) 
        }
   
    </ul>
  );
}

export default Pagination;
