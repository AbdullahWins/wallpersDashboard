import React, { useContext, useState } from "react";
import { useEffect } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import LoadingScreen from "../../Components/Shared/LoadingScreens/LoadingScreen";
import { RingtoneContext } from "../../Contexts/RingtoneContext/RingtoneContext";
import RingtoneTable from "../../Components/Tables/RingtoneTable/RingtoneTable";

const ApprovedRingtones = () => {
  const {
    ringtones,
    isLoading,
    searchBarValue,
    setSearchBarValue,
    setCurrentRingtone,
    updateManyRingtoneStatus,
  } = useContext(RingtoneContext);

  const [approved, setApproved] = useState(null);
  const [filteredApproved, setFilteredApproved] = useState(approved);
  const [selectedRingtones, setSelectedRingtones] = useState([]);

  const handleSelectCheckbox = (wallpaper, e) => {
    const selectedWallpaperList = [...selectedRingtones];
    if (e?.target?.checked) {
      selectedWallpaperList?.push(wallpaper?._id);
    } else {
      const index = selectedWallpaperList?.indexOf(wallpaper?._id);
      if (index !== -1) {
        selectedWallpaperList?.splice(index, 1);
      }
    }
    setSelectedRingtones(selectedWallpaperList);
  };

  useEffect(() => {
    const approvedWallpapers = ringtones?.filter((ringtone) =>
      ringtone?.status?.includes("approved")
    );
    setApproved(approvedWallpapers);
    setFilteredApproved(approvedWallpapers);
  }, [ringtones]);

  const handleSelectAllCheckbox = (ringtones, e) => {
    const selectAllRingtone = [];
    if (e?.target?.checked) {
      ringtones?.map((ringtone) => {
        return selectAllRingtone?.push(ringtone?._id);
      });
    } else {
      setSelectedRingtones([]);
    }
    setSelectedRingtones(selectAllRingtone);
  };

  //filter categories by search value
  const filterWallpapersBySearch = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    const filterWallpapers = approved?.filter((wallpaper) =>
      searchBarValue !== null
        ? wallpaper?.name?.toLowerCase().includes(searchValue?.toLowerCase())
        : true
    );
    setFilteredApproved(filterWallpapers);
    setSearchBarValue(searchValue);
  };

  //handle approve all
  const handleApproveAll = (category, status) => {
    updateManyRingtoneStatus(category, status);
    setSelectedRingtones([]);
  };

  return (
    <div className="overflow-auto w-full pt-6 pr-6">
      <SearchBar
        value={searchBarValue}
        onChange={filterWallpapersBySearch}
        tableName="Ringtones"
      />

      <div
        className={` ${
          selectedRingtones?.length < 1
            ? "hidden"
            : "flex items-center justify-start gap-4"
        } p-4 bg-whiteHigh`}
      >
        <label
          onClick={() => handleApproveAll(selectedRingtones, "Cancelled")}
          className="btn btn-sm border-none bg-primaryMain"
        >
          Decline Selected
        </label>
        <button
          className="btn btn-sm border-none text-blackMid hover:text-whiteHigh bg-whiteLow"
          onClick={() => handleApproveAll(selectedRingtones, "Approved")}
        >
          Approve Selected
        </button>
      </div>
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        <RingtoneTable
          items={filteredApproved}
          setCurrentCustomer={setCurrentRingtone}
          handleSelectCheckbox={handleSelectCheckbox}
          handleSelectAllCheckbox={handleSelectAllCheckbox}
          selectedItems={selectedRingtones}
        ></RingtoneTable>
      )}
    </div>
  );
};

export default ApprovedRingtones;
