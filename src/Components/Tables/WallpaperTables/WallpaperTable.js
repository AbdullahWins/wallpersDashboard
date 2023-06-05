import React, { useContext, useEffect, useState } from "react";
import EmptyScreen from "../../Shared/EmptyScreens/EmptyScreen";
import { Pagination } from "../../Pagination/Pagination";
import { WallpaperContext } from "../../../Contexts/WallpaperContext/WallpaperContext";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";

const WallpaperTable = ({
  items,
  handleSelectCheckbox,
  handleSelectAllCheckbox,
  selectedItems,
}) => {
  const { searchBarValue } = useContext(WallpaperContext);
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

  const handleCheckbox = (wallpaper, e) => {
    handleSelectCheckbox(wallpaper, e);
  };

  const handleAllCheckbox = (wallpapers, e) => {
    handleSelectAllCheckbox(wallpapers, e);
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
                Preview
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
            {currentRows?.map((wallpaper, i) => {
              return (
                <tr key={i} className="text-center">
                  <th className="p-0">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-none"
                      name="checkbox"
                      checked={selectedItems?.includes(wallpaper?._id)}
                      onChange={(e) => {
                        handleCheckbox(wallpaper, e);
                      }}
                    />
                  </th>
                  <td className="p-0">{i + 1}</td>
                  <td className="flex items-center justify-center p-3">
                    <img className="h-8 w-8" src={wallpaper?.imageUrl} alt="" />
                  </td>
                  <td className="p-0">
                    {new Date(wallpaper?.timestamp).toLocaleDateString("en-US")}
                  </td>
                  <td className="p-0">{wallpaper?.name}</td>
                  <td className="p-0">{wallpaper?.author}</td>
                  <td className="p-0">{wallpaper?.category}</td>
                  <td className="p-0">
                    {wallpaper?.colors.map((color, i) => {
                      return <span key={i}>{color} </span>;
                    })}
                  </td>
                  <td className="p-0">
                    {wallpaper?.price === 0 ? "Free" : wallpaper?.price}
                  </td>
                  <DropdownMenu></DropdownMenu>
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
    </div>
  );
};

export default WallpaperTable;
