export const Pagination = ({
  currentPage,
  setCurrentPage,
  activeButton,
  setActiveButton,
  rowsPerPage,
  setRowsPerPage,
  totalRows,
}) => {
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActiveButton(pageNumber);
  };

  const handleItemsPerPage = (value) => {
    setCurrentPage(1);
    setRowsPerPage(value);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination flex gap-2">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                pageNumber === currentPage ? "active" : ""
              }`}
            >
              <button
                className={`page-link btn btn-sm ${
                  activeButton === pageNumber
                    ? "text-primaryMainLightest bg-primaryMain border-primaryMain hover:bg-primaryMain hover:text-whiteHigh hover:border-primaryMain"
                    : "text-blackMid bg-whiteMid border-whiteLow hover:bg-primaryMain hover:text-whiteHigh hover:border-primaryMain"
                }`}
                onClick={() => handleClick(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <section className="flex items-center justify-end gap-4 py-4">
      <div>{renderPagination()}</div>
      <div>
        <p>
          Showing{" "}
          {Math.min(rowsPerPage * currentPage - rowsPerPage + 1, totalRows)} -{" "}
          {Math.min(rowsPerPage * currentPage, totalRows)} of {totalRows}
        </p>
      </div>
      <div className="dropdown dropdown-top dropdown-end">
        <label
          tabIndex={3}
          className="rounded-lg px-2 py-2 border border-blackLow text-blackMid cursor-pointer"
        >
          {rowsPerPage} &nbsp;
          <i className="fa-solid fa-angle-down text-sm"></i>
        </label>
        <ul
          tabIndex={3}
          className="dropdown-content menu p-1 mt-2 m-0.5 shadow bg-base-100 rounded-md"
        >
          <hr className="text-disabledColor opacity-10" />
          <li>
            <p
              onClick={() => handleItemsPerPage(10)}
              className="py-1 active:bg-blackLow"
            >
              10
            </p>
          </li>
          <hr className="text-disabledColor opacity-10" />
          <li>
            <p
              onClick={() => handleItemsPerPage(25)}
              className="py-1 active:bg-blackLow"
            >
              25
            </p>
          </li>
          <hr className="text-disabledColor opacity-10" />
          <li>
            <p
              onClick={() => handleItemsPerPage(50)}
              className="py-1 active:bg-blackLow"
            >
              50
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
