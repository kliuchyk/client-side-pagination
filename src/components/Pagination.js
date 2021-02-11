import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-number" onClick={() => setCurrentPage(number)}>
          <a href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};
