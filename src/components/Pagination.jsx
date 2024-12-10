import React from "react";

const Pagination = ({ page, totalPages, onPageChange, onPrevious, onNext }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (page > 2) pageNumbers.push("...");
      if (page > 1 && page < totalPages) pageNumbers.push(page);
      if (page < totalPages - 1) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((pageNumber, index) => (
      <button
        key={index}
        className={`px-4 py-2 rounded ${
          pageNumber === page
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => {
          if (typeof pageNumber === "number") onPageChange(pageNumber);
        }}
        disabled={pageNumber === "..."}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className="flex gap-2">
      <button
        className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100"
        onClick={onPrevious}
        disabled={page === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        className="px-4 py-2 text-gray-600 rounded hover:bg-gray-100"
        onClick={onNext}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
