import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthContext/AuthProvider";
import { router } from "./Routes/Routes";
import WallpaperProvider from "./Contexts/WallpaperContext/WallpaperContext";

function App() {
  const Router = router;
  return (
    <AuthProvider>
      <WallpaperProvider>
        <div className="h-screen">
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </WallpaperProvider>
    </AuthProvider>
  );
}

export default App;
