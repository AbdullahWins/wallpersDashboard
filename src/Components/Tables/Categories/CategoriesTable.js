import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomerContext } from "../../../Contexts/CustomerContext/CustomerProvider";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import EmptyScreen from "../../Shared/EmptyScreens/EmptyScreen";

const CategoriesTable = ({ rows, handleSelectCheckbox,handleSelectAllCheckbox,selectedCategories }) => {
  const {
    searchBarValue,
    currentCustomer,
    setCurrentCustomer,
    clickHandlerForModals,
  } = useContext(CustomerContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows?.slice(indexOfFirstRow, indexOfLastRow);

  useEffect(() => {
    if (searchBarValue !== null) {
      setCurrentPage(1);
      setActiveButton(1);
    }
  }, [searchBarValue]);

  const handleItemsPerPage = (value) => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
    setCurrentPage(1);
    setRowsPerPage(value);
    console.log(value);
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActiveButton(pageNumber);
  };

  const handleCheckbox = (category, e) => {
    handleSelectCheckbox(category, e);
  };

  //   const =

  const handleAllCheckbox = (categories, e) => {
    handleSelectAllCheckbox(categories, e);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(rows.length / rowsPerPage); i++) {
      pageNumbers?.push(i);
    }

    return (
      <nav>
        <ul className="pagination flex gap-2">
          {pageNumbers?.map((pageNumber) => (
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
    <div className=" relative pb-16">
      {rows?.length > 0 ? (
        <table className="table w-full">
          <thead>
            <tr className="font-bold text-center text-3xl">
              <th className="bg-blueLight text-bold text-lg normal-case">
                <input
                  type="checkbox"
                  className="checkbox rounded-none"
                  name="allCheckbox"
                  onChange={(e) => {
                    handleAllCheckbox(currentRows, e);
                  }}
                />
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Categories image
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Collections name
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Created
              </th>

              <th className="bg-blueLight text-bold text-lg normal-case">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentRows?.map((category, i) => {
              return (
                <tr key={i} className="text-center">
                  <th className="px-0 ">
                    <input
                      type="checkbox"
                      className="checkbox rounded-none"
                      name="checkbox"
                      checked={selectedCategories?.includes(category?.id)}
                      onChange={(e) => {
                        handleCheckbox(category, e);
                      }}
                    />
                  </th>
                  <td className="px-0 mx-0">
                    <span className="material-symbols-outlined text-blackMid text-4xl">
                      {category?.collection_icon}
                    </span>
                  </td>
                  <td className="px-0 mx-0">{category?.collection_name}</td>
                  <td className="px-0 mx-0">{category?.createdAt}</td>

                  <td className="px-0 mx-0">
                    <div className="flex items-center justify-center gap-0">
                      {/* <label
                        htmlFor="categorysBlockPopup"
                        onClick={() => setCurrentcategory(category)}
                        className="btn rounded-full p-0 bg-whiteHigh text-blackMid border-none hover:bg-whiteHigh"
                      >
                        <span className="material-symbols-outlined p-0">
                          block
                        </span>
                      </label> */}
                      <Link
                        to={{
                          pathname: `/categoriesEdit/${category?.id}`,
                          category: category,
                        }}
                      >
                        <label
                          htmlFor="pausePopup"
                          className="btn rounded-full p-3 bg-whiteHigh text-alertColor border-none hover:bg-whiteHigh"
                        >
                          <span className="material-symbols-outlined">
                            border_color
                          </span>
                        </label>
                      </Link>
                      <button
                        type="button"
                        onClick={() => console.log("delete")}
                      >
                        <label
                          htmlFor="deletePopup"
                          className="btn rounded-full p-3 bg-whiteHigh text-errorColor border-none hover:bg-whiteHigh"
                        >
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </label>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <EmptyScreen></EmptyScreen>
      )}
      <section className="flex items-center justify-end gap-4 py-4 absolute bottom-0 right-0">
        <div>{renderPagination()}</div>
        <div>
          <p>
            Showing {indexOfFirstRow + 1} -{" "}
            {indexOfLastRow > rows?.length ? rows?.length : indexOfLastRow} of{" "}
            {rows?.length}
          </p>
        </div>
        <div className="dropdown dropdown-top dropdown-end ">
          <label
            tabIndex={3}
            className="rounded-lg px-2 py-2 border border-blackLow text-blackMid cursor-pointer"
          >
            {rowsPerPage} &nbsp;
            <i className="fa-solid fa-angle-down text-sm"></i>
          </label>
          <ul
            tabIndex={3}
            className="dropdown-content menu p-1 mt-2 m-0.5 shadow bg-base-100 rounded-md "
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
      <ConfirmationModal actionName="delete"></ConfirmationModal>
      {/* <CategoriesConfirmationBlockPopup
        currentCustomer={currentCustomer}
        clickHandlerForModals={clickHandlerForModals}
      ></CategoriesConfirmationBlockPopup> */}
    </div>
  );
};

export default CategoriesTable;