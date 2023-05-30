import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const WallpaperContext = createContext();

const WallpaperProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [wallpapers, setWallpapers] = useState(null);

  //fetch all wallpapers on load
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/wallpapers`)
      .then((response) => {
        // Handle the response data
        const allWallpapers = response?.data;
        setWallpapers(allWallpapers);
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
  const WallpapersInfo = {
    wallpapers,
    isLoading,
    setIsLoading,
    setWallpapers,
  };
  return (
    <WallpaperContext.Provider value={WallpapersInfo}>
      {children}
    </WallpaperContext.Provider>
  );
};

export default WallpaperProvider;
