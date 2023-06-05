import React, { useContext } from "react";
import { lense } from "../../../Assets/getImages";
import { WallpaperContext } from "../../../Contexts/WallpaperContext/WallpaperContext";

const DashboardTable = ({ title }) => {
  const { wallpapers, isLoading } = useContext(WallpaperContext);
  return (
    <section>
      <div className="flex flex-col h-96">
        <section className="flex items-center justify-between mb-6">
          <p className="text-2xl text-blackMid font-bold">{title}</p>
        </section>
        <div className="overflow-auto max-h-80">
          {isLoading ? (
            ""
          ) : (
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="bg-primaryMain py-6 text-whiteHigh normal-case">
                    Lense
                  </th>
                  <th className="bg-primaryMain py-6 text-whiteHigh normal-case">
                    Created
                  </th>
                  <th className="bg-primaryMain py-6 text-whiteHigh normal-case">
                    Artist
                  </th>
                </tr>
              </thead>
              <tbody>
                {wallpapers?.map((wallpaper, i) => {
                  return (
                    <tr key={i}>
                      <th>
                        <img src={lense} alt="" className="w-8 h-8" />
                      </th>
                      <td>
                        {new Date(wallpaper?.timestamp).toLocaleDateString(
                          "en-US"
                        )}
                      </td>
                      <td>{wallpaper?.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default DashboardTable;
