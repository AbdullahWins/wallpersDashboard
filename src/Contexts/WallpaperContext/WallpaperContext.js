import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const WallpaperContext = createContext();

const WallpaperProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [wallpapers, setWallpapers] = useState(null);
  const [searchBarValue, setSearchBarValue] = useState("");

  //fetch all wallpapers on load
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/wallpapers`)
      .then((response) => {
        // Handle the response data
        const allWallpapers = response?.data;
        setWallpapers(allWallpapers);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  //exports
  const WallpapersInfo = {
    isLoading,
    setIsLoading,
    wallpapers,
    setWallpapers,
    searchBarValue,
    setSearchBarValue,
  };
  return (
    <WallpaperContext.Provider value={WallpapersInfo}>
      {children}
    </WallpaperContext.Provider>
  );
};

export default WallpaperProvider;
