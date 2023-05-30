import React, { useContext, useEffect, useState } from "react";
import EmptyScreen from "../../Shared/EmptyScreens/EmptyScreen";
import { Pagination } from "../../Pagination/Pagination";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import { RingtoneContext } from "../../../Contexts/RingtoneContext/RingtoneContext";
import ReactAudioPlayer from "react-audio-player";

const RingtoneTable = ({
  items,
  handleSelectCheckbox,
  handleSelectAllCheckbox,
  selectedItems,
}) => {
  const { searchBarValue } = useContext(RingtoneContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = items?.slice(indexOfFirstRow, indexOfLastRow);

  useEffect(() => {
    if (searchBarValue !== null) {
      setCurrentPage(1);
      setActiveButton(1);
    }
  }, [searchBarValue]);

  const handleCheckbox = (ringtone, e) => {
    handleSelectCheckbox(ringtone, e);
  };

  const handleAllCheckbox = (ringtones, e) => {
    handleSelectAllCheckbox(ringtones, e);
  };

  return (
    <div className="relative overflow-auto pb-16">
      {items?.length > 0 ? (
        <table className="table w-full">
          <thead className=" p-0">
            <tr className="font-bold text-center text-3xl">
              <th className="flex items-center justify-center gap-0 bg-blueLight text-bold text-lg normal-case">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm rounded-none p-3"
                  name="allCheckbox"
                  onChange={(e) => {
                    handleAllCheckbox(currentRows, e);
                  }}
                />
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case p-2">
                Serial
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Play
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Created
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Title
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Contributor
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Category
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Color
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Price(Coins)
              </th>
              <th className="bg-blueLight text-bold text-lg normal-case">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentRows?.map((ringtone, i) => {
              return (
                <tr key={i} className="text-center">
                  <th className="p-0">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-none"
                      name="checkbox"
                      checked={selectedItems?.includes(ringtone?._id)}
                      onChange={(e) => {
                        handleCheckbox(ringtone, e);
                      }}
                    />
                  </th>
                  <td className="p-0">{i + 1}</td>
                  <td className="flex items-center justify-center p-3">
                    {
                      <ReactAudioPlayer
                        src={ringtone?.audioUrl}
                        controls
                      ></ReactAudioPlayer>
                    }
                  </td>
                  <td className="p-0">
                    {new Date(ringtone?.timestamp).toLocaleDateString("en-US")}
                  </td>
                  <td className="p-0">{ringtone?.name}</td>
                  <td className="p-0">{ringtone?.author}</td>
                  <td className="p-0">{ringtone?.category}</td>
                  <td className="p-0">
                    {ringtone?.colors.map((color, i) => {
                      return <span key={i}>{color} </span>;
                    })}
                  </td>
                  <td className="p-0">
                    {ringtone?.price === 0 ? "Free" : ringtone?.price}
                  </td>
                  <DropdownMenu></DropdownMenu>
                  {/* <td className="p-0">
                    <div className="flex items-center justify-center p-0">
                      <Link
                        to={{
                          pathname: `/wallpaperEdit/${wallpaper?.id}`,
                          wallpaper: wallpaper,
                        }}
                      >
                        <label
                          htmlFor="pausePopup"
                          className="btn rounded-full bg-whiteHigh text-alertColor border-none hover:bg-whiteHigh"
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
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <EmptyScreen />
      )}
      <div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalRows={items?.length}
        ></Pagination>
      </div>
      {/* <ConfirmationModal actionName="delete" />
      <CategoriesConfirmationBlockPopup
        currentCustomer={currentCustomer}
        clickHandlerForModals={clickHandlerForModals}
      ></CategoriesConfirmationBlockPopup> */}
    </div>
  );
};

export default RingtoneTable;
