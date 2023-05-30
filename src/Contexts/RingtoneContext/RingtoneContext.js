import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const RingtoneContext = createContext();

const RingtoneProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [ringtones, setRingtones] = useState(null);
  const [searchBarValue, setSearchBarValue] = useState(null);

  //fetch all ringtones on load
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/ringtones`)
      .then((response) => {
        // Handle the response data
        const allRingtones = response?.data;
        setRingtones(allRingtones);
        // //set pending
        // const pending = allWallpapers.find(
        //   (wallpaper) => wallpaper?.status === "pending"
        // );
        // setPendingWallpapers(pending);
        // //set approved
        // const approve = allWallpapers.find(
        //   (wallpaper) => wallpaper?.status === "approved"
        // );
        // setApprovedWallpapers(approve);
        // //set rejected
        // const rejected = allWallpapers.find(
        //   (wallpaper) => wallpaper?.status === "rejected"
        // );
        // setRejectedWallpapers(rejected);
        // //set paused
        // const paused = allWallpapers.find(
        //   (wallpaper) => wallpaper?.status === "paused"
        // );
        // setPausedWallpapers(paused);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  //exports
  const RingtonesInfo = {
    ringtones,
    isLoading,
    setIsLoading,
    setRingtones,
    searchBarValue,
    setSearchBarValue,
  };
  return (
    <RingtoneContext.Provider value={RingtonesInfo}>
      {children}
    </RingtoneContext.Provider>
  );
};

export default RingtoneProvider;
