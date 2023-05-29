import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomerContext } from "../../../Contexts/CustomerContext/CustomerProvider";
import ConfirmationModal from "../../Modals/ConfirmationModal";
import EmptyScreen from "../../Shared/EmptyScreens/EmptyScreen";
import { Pagination } from "../../Pagination/Pagination";

const CategoriesTable = ({
  rows,
  handleSelectCheckbox,
  handleSelectAllCheckbox,
  selectedCategories,
}) => {
  const {
    searchBarValue,
    // currentCustomer,
    // setCurrentCustomer,
    // clickHandlerForModals,
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

  const handleCheckbox = (category, e) => {
    handleSelectCheckbox(category, e);
  };

  const handleAllCheckbox = (categories, e) => {
    handleSelectAllCheckbox(categories, e);
  };

  return (
    <div className="relative pb-16">
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
                  <th className="px-0">
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
        <EmptyScreen />
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalRows={rows?.length}
      />
      <ConfirmationModal actionName="delete" />
      {/* <CategoriesConfirmationBlockPopup
        currentCustomer={currentCustomer}
        clickHandlerForModals={clickHandlerForModals}
      ></CategoriesConfirmationBlockPopup> */}
    </div>
  );
};

export default CategoriesTable;
