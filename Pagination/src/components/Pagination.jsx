const Pagination = ({
  currentPage,
  startPages,
  noOfPages,
  handleActivePage,
  handleNextPage,
}) => {
  return (
    <div className="flex mb-3 justify-center gap-2">
      <button
        className="btn btn-sm"
        onClick={() => handlePrevPage()}
        disabled={currentPage === startPages}
      >
        Prev
      </button>

      {[...Array(noOfPages).keys()].map((i) => (
        <p
          key={i}
          className={`px-3 py-1 border cursor-pointer ${
            currentPage === i ? "bg-red-500 text-white" : ""
          }`}
          onClick={() => handleActivePage(i)}
        >
          {i + 1}
        </p>
      ))}

      <button
        className="btn btn-sm"
        onClick={() => handleNextPage()}
        disabled={currentPage === noOfPages - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
