import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthContext/AuthProvider";
import { router } from "./Routes/Routes";
import WallpaperProvider from "./Contexts/WallpaperContext/WallpaperContext";
import RingtoneProvider from "./Contexts/RingtoneContext/RingtoneContext";

function App() {
  const Router = router;
  return (
    <AuthProvider>
      <WallpaperProvider>
        <RingtoneProvider>
          <div className="h-screen">
            <RouterProvider router={Router}></RouterProvider>
          </div>
        </RingtoneProvider>
      </WallpaperProvider>
    </AuthProvider>
  );
}

export default App;
