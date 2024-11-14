// components/Paginate.js
import React from "react";
import "../styles/paginate.css";

const Paginate = ({
  currentPage,
  totalPages,
  onPageChange,
  selectedRows,
  onDeleteSelected,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      <button
        onClick={onDeleteSelected}
        className="delete-selected"
        disabled={selectedRows.length === 0}
        style={{
          backgroundColor: "red",
          border: "0px",
          cursor: selectedRows.length === 0 ? "not-allowed" : "pointer",
        }}
      >
        Delete Selected
      </button>

      <button
        onClick={() => onPageChange(1)}
        className="first-page"
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        onClick={handlePrevious}
        className="previous-page"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`page-number ${page === currentPage ? "active" : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        className="next-page"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        className="last-page"
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Paginate;
