import React, { useContext, useState } from "react";
import OrdersLoading from "../../Components/Shared/LoadingScreens/OrdersLoading";
import TableApprovedWallpapers from "../../Components/Tables/WallpaperTables/TableApprovedWallpapers";
import { WallpaperContext } from "../../Contexts/WallpaperContext/WallpaperContext";
import { useEffect } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";

const ApprovedWallpapers = () => {
  const {
    wallpapers,
    isLoading,
    searchBarValue,
    setCurrentCustomer,
    updateManyCustomerStatus,
  } = useContext(WallpaperContext);

  const [approved, setApproved] = useState(null);
  const [filteredApproved, setFilteredApproved] = useState(approved);
  const [selectedWallpapers, setSelectedWallpapers] = useState([]);

  const handleSelectCheckbox = (wallpaper, e) => {
    const selectedWallpaperList = [...selectedWallpapers];
    if (e?.target?.checked) {
      selectedWallpaperList?.push(wallpaper?._id);
    } else {
      const index = selectedWallpaperList?.indexOf(wallpaper?._id);
      if (index !== -1) {
        selectedWallpaperList?.splice(index, 1);
      }
    }
    setSelectedWallpapers(selectedWallpaperList);
  };

  useEffect(() => {
    const approvedWallpapers = wallpapers.filter((wallpaper) =>
      wallpaper?.status?.includes("approved")
    );
    setApproved(approvedWallpapers);
    setFilteredApproved(approvedWallpapers);
  }, [wallpapers]);

  const handleSelectAllCheckbox = (categories, e) => {
    const selectAllCategory = [];
    if (e?.target?.checked) {
      categories?.map((category) => {
        return selectAllCategory?.push(category?._id);
      });
    } else {
      setSelectedWallpapers([]);
    }
    setSelectedWallpapers(selectAllCategory);
  };

  //filter categories by search value
  const filterWallpapersBySearch = (e) => {
    const searchValue = e.target.value;
    const filterWallpapers = approved?.filter((wallpaper) =>
      searchBarValue !== null
        ? wallpaper?.title?.toLowerCase().includes(searchValue?.toLowerCase())
        : true
    );
    setFilteredApproved(filterWallpapers);
  };

  const handleApproveAll = (category, status) => {
    updateManyCustomerStatus(category, status);
    setSelectedWallpapers([]);
  };

  return (
    <div className="overflow-auto w-full pt-6 pr-6">
      <SearchBar
        value={searchBarValue}
        onChange={filterWallpapersBySearch}
        tableName="Wallpapers"
      />

      <div
        className={` ${
          selectedWallpapers?.length < 1
            ? "hidden"
            : "flex items-center justify-start gap-4"
        } p-4 bg-whiteHigh`}
      >
        <label
          onClick={() => handleApproveAll(selectedWallpapers, "Cancelled")}
          className="btn btn-sm border-none bg-primaryMain"
        >
          Decline Selected
        </label>
        <button
          className="btn btn-sm border-none text-blackMid hover:text-whiteHigh bg-whiteLow"
          onClick={() => handleApproveAll(selectedWallpapers, "Approved")}
        >
          Approve Selected
        </button>
      </div>
      {isLoading ? (
        <OrdersLoading></OrdersLoading>
      ) : (
        <TableApprovedWallpapers
          items={filteredApproved}
          setCurrentCustomer={setCurrentCustomer}
          handleSelectCheckbox={handleSelectCheckbox}
          handleSelectAllCheckbox={handleSelectAllCheckbox}
          selectedItems={selectedWallpapers}
        ></TableApprovedWallpapers>
      )}
    </div>
  );
};

export default ApprovedWallpapers;
