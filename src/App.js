import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthContext/AuthProvider";
import BusinessProvider from "./Contexts/BusinessContext/BusinessProvider";
import CustomerProvider from "./Contexts/CustomerContext/CustomerProvider";
import DeliveryProvider from "./Contexts/DeliveryContext/DeliveryProvider";
import LocationProvider from "./Contexts/LocationContext/LocationProvider";
import OrdersProvider from "./Contexts/OrdersContext/OrdersProvider";
import PaymentProvider from "./Contexts/PaymentContext/PaymentProvider";
import StaffProvider from "./Contexts/StaffContext/StaffProvider";
import WarehouseProvider from "./Contexts/WarehouseContext/WarehouseProvider";
import { router } from "./Routes/Routes";
import WallpaperProvider from "./Contexts/WallpaperContext/WallpaperContext";

function App() {
  const Router = router;
  return (
    <AuthProvider>
      <WallpaperProvider>
        <OrdersProvider>
          <DeliveryProvider>
            <BusinessProvider>
              <CustomerProvider>
                <WarehouseProvider>
                  <LocationProvider>
                    <PaymentProvider>
                      <StaffProvider>
                        <div className="h-screen">
                          <RouterProvider router={Router}></RouterProvider>
                        </div>
                      </StaffProvider>
                    </PaymentProvider>
                  </LocationProvider>
                </WarehouseProvider>
              </CustomerProvider>
            </BusinessProvider>
          </DeliveryProvider>
        </OrdersProvider>
      </WallpaperProvider>
    </AuthProvider>
  );
}

export default App;
