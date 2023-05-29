import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import avater from "../../../Assets/img/profile/avater.png";
// import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import "./SideNav.css";

const SideNav = () => {
  const [isClosed] = useState();
  // const [canShow, setCanShow] = useState();
  const [isActive, setIsActive] = useState("dashboard");
  const [isSubmenuActive, setIsSubmenuActive] = useState();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const submenuRef = useRef({});

  // const { dbUser, userType } = useContext(AuthContext);

  // const navigate = useNavigate();

  // const toggleSideNav = () => {
  //   setIsClosed(!isClosed);
  //   setCanShow(!canShow);
  // };

  const handleMenus = (menu, submenu) => {
    setIsActive(menu);
    setIsSubmenuActive(submenu);
    console.log(submenu, isSubmenuOpen);

    if (submenu?.length === 0 && isSubmenuOpen) {
      setIsSubmenuOpen(false);
    }
  };

  const handleDropdown = (menu, submenuOpen) => {
    if (!submenuOpen) {
      setIsSubmenuOpen((prev) => ({
        [menu]: !prev[menu],
      }));
    }
  };

  // const handleNavigation = (navRoute) => {
  //   const navigationRoute = `/${navRoute}`;
  //   navigate(navigationRoute, { replace });
  //   activateMenu(navRoute);
  // };

  return (
    <div
      className={`${
        isClosed ? "w-20" : "w-72"
      } bg-primaryMainDarkest flex flex-col gap-1 h-full sideNav pb-24 overflow-auto text-whiteHigh mt-1`}
    >
      {/* routes */}
      <section className="flex flex-col flex-1 justify-start items-start gap-1 py-4">
        {/* dashboard  */}
        <div className="w-full overflow-hidden capitalize">
          <Link
            to="/"
            className={`flex items-center pl-6 pr-3 py-4 cursor-pointer select-none ${
              isActive === "dashboard" && "bg-primaryMain"
            }`}
            onClick={() => handleMenus("dashboard", "")}
          >
            <span className="material-symbols-outlined">dashboard</span>
            &nbsp;
            <p className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
              <span>dashboard</span>
            </p>
          </Link>
        </div>

        {/* wallpapers */}
        <div className="w-full overflow-hidden capitalize">
          <div
            className={`flex items-center pl-6 pr-3 py-4 cursor-pointer select-none`}
            onClick={() => handleDropdown("Wallpapers")}
          >
            <span className="material-symbols-outlined">photo_library</span>
            &nbsp;
            <p className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
              <span>Wallpapers</span>
            </p>
            <span
              className={`material-symbols-outlined duration-100 ${
                isSubmenuOpen["Wallpapers"] ? "rotate-180" : "rotate-0"
              } ${isClosed && "hidden"}`}
            >
              expand_more
            </span>
          </div>
          {/* submenu  */}

          <div
            ref={(ref) => (submenuRef.current["Wallpapers"] = ref)}
            className={`flex flex-col gap-1 duration-200`}
            style={{
              maxHeight: isSubmenuOpen["Wallpapers"]
                ? `${submenuRef.current["Wallpapers"]?.scrollHeight}px`
                : "0",
            }}
          >
            {/* Submenu items */}
            <Link
              to="/snapchatFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Approved"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Wallpapers", "Approved")}
            >
              <p>Approved</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Pending"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Wallpapers", "Pending")}
            >
              <p>Pending</p>
            </Link>
            <Link
              to="/ecardFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Paused"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Wallpapers", "Paused")}
            >
              <p>Paused</p>
            </Link>
            <Link
              to="/ecardFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Rejected"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Wallpapers", "Rejected")}
            >
              <p>Rejected</p>
            </Link>
          </div>
        </div>

        {/* ringtones */}
        <div className="w-full overflow-hidden capitalize">
          <div
            className={`flex items-center pl-6 pr-3 py-4 cursor-pointer select-none`}
            onClick={() => handleDropdown("Ringtones")}
          >
            <span className="material-symbols-outlined">music_note</span>
            &nbsp;
            <p className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
              <span>Ringtones</span>
            </p>
            <span
              className={`material-symbols-outlined duration-100 ${
                isSubmenuOpen["Ringtones"] ? "rotate-180" : "rotate-0"
              } ${isClosed && "hidden"}`}
            >
              expand_more
            </span>
          </div>
          {/* submenu  */}

          <div
            ref={(ref) => (submenuRef.current["Ringtones"] = ref)}
            className={`flex flex-col gap-1 duration-200`}
            style={{
              maxHeight: isSubmenuOpen["Ringtones"]
                ? `${submenuRef.current["Ringtones"]?.scrollHeight}px`
                : "0",
            }}
          >
            {/* Submenu items */}
            <Link
              to="/snapchatFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Approved"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Wallpapers", "Approved")}
            >
              <p>Approved</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Pending"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Wallpapers", "Pending")}
            >
              <p>Pending</p>
            </Link>
            <Link
              to="/ecardFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Paused"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Wallpapers", "Paused")}
            >
              <p>Paused</p>
            </Link>
            <Link
              to="/ecardFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Rejected"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Wallpapers", "Rejected")}
            >
              <p>Rejected</p>
            </Link>
          </div>
        </div>
        {/* users */}
        <div className="w-full overflow-hidden capitalize">
          <div
            className={`flex items-center pl-6 pr-3 py-4 cursor-pointer select-none`}
            onClick={() => handleDropdown("Users")}
          >
            <span className="material-symbols-outlined">person</span>
            &nbsp;
            <p className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
              <span>Users</span>
            </p>
            <span
              className={`material-symbols-outlined duration-100 ${
                isSubmenuOpen["Users"] ? "rotate-180" : "rotate-0"
              } ${isClosed && "hidden"}`}
            >
              expand_more
            </span>
          </div>
          {/* submenu  */}

          <div
            ref={(ref) => (submenuRef.current["Users"] = ref)}
            className={`flex flex-col gap-1 duration-200`}
            style={{
              maxHeight: isSubmenuOpen["Users"]
                ? `${submenuRef.current["Users"]?.scrollHeight}px`
                : "0",
            }}
          >
            {/* Submenu items */}
            <Link
              to="/snapchatFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Active"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Users", "Active")}
            >
              <p>Active</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Paused"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Users", "Paused")}
            >
              <p>Paused</p>
            </Link>
          </div>
        </div>
        {/* controbutors */}
        <div className="w-full overflow-hidden capitalize">
          <div
            className={`flex items-center pl-6 pr-3 py-4 cursor-pointer select-none`}
            onClick={() => handleDropdown("Controbutors")}
          >
            <span className="material-symbols-outlined">
              imagesearch_roller
            </span>
            &nbsp;
            <p className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
              <span>Controbutors</span>
            </p>
            <span
              className={`material-symbols-outlined duration-100 ${
                isSubmenuOpen["Controbutors"] ? "rotate-180" : "rotate-0"
              } ${isClosed && "hidden"}`}
            >
              expand_more
            </span>
          </div>
          {/* submenu  */}

          <div
            ref={(ref) => (submenuRef.current["Controbutors"] = ref)}
            className={`flex flex-col gap-1 duration-200`}
            style={{
              maxHeight: isSubmenuOpen["Controbutors"]
                ? `${submenuRef.current["Controbutors"]?.scrollHeight}px`
                : "0",
            }}
          >
            {/* Submenu items */}
            <Link
              to="/snapchatFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Approved"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Controbutors", "Approved")}
            >
              <p>Approved</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Pending"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Controbutors", "Pending")}
            >
              <p>Pending</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Rejected"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Controbutors", "Rejected")}
            >
              <p>Rejected</p>
            </Link>
          </div>
        </div>

        {/* categories */}
        <div className="w-full overflow-hidden capitalize">
          <div
            className={`flex items-center pl-6 pr-3 py-4 cursor-pointer select-none`}
            onClick={() => handleDropdown("Categories")}
          >
            <span className="material-symbols-outlined">settings_suggest</span>
            &nbsp;
            <p className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
              <span>Categories</span>
            </p>
            <span
              className={`material-symbols-outlined duration-100 ${
                isSubmenuOpen["Categories"] ? "rotate-180" : "rotate-0"
              } ${isClosed && "hidden"}`}
            >
              expand_more
            </span>
          </div>
          {/* submenu  */}

          <div
            ref={(ref) => (submenuRef.current["Categories"] = ref)}
            className={`flex flex-col gap-1 duration-200`}
            style={{
              maxHeight: isSubmenuOpen["Categories"]
                ? `${submenuRef.current["Categories"]?.scrollHeight}px`
                : "0",
            }}
          >
            {/* Submenu items */}
            <Link
              to="/snapchatFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Wallpaper"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Categories", "Wallpaper")}
            >
              <p>Wallpaper</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Color"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Categories", "Color")}
            >
              <p>Color</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Ringtone"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Categories", "Ringtone")}
            >
              <p>Ringtone</p>
            </Link>
          </div>
        </div>
        {/* payouts */}
        <div className="w-full overflow-hidden capitalize">
          <div
            className={`flex items-center pl-6 pr-3 py-4 cursor-pointer select-none`}
            onClick={() => handleDropdown("Payouts")}
          >
            <span className="material-symbols-outlined">paid</span>
            &nbsp;
            <p className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
              <span>Payouts</span>
            </p>
            <span
              className={`material-symbols-outlined duration-100 ${
                isSubmenuOpen["Payouts"] ? "rotate-180" : "rotate-0"
              } ${isClosed && "hidden"}`}
            >
              expand_more
            </span>
          </div>
          {/* submenu  */}

          <div
            ref={(ref) => (submenuRef.current["Payouts"] = ref)}
            className={`flex flex-col gap-1 duration-200`}
            style={{
              maxHeight: isSubmenuOpen["Payouts"]
                ? `${submenuRef.current["Payouts"]?.scrollHeight}px`
                : "0",
            }}
          >
            {/* Submenu items */}
            <Link
              to="/snapchatFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Pending"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Categories", "Pending")}
            >
              <p>Pending</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Completed"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Categories", "Completed")}
            >
              <p>Completed</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Failed"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Categories", "Failed")}
            >
              <p>Failed</p>
            </Link>
          </div>
        </div>
        {/* settings */}
        <div className="w-full overflow-hidden capitalize">
          <div
            className={`flex items-center pl-6 pr-3 py-4 cursor-pointer select-none`}
            onClick={() => handleDropdown("Settings")}
          >
            <span className="material-symbols-outlined">app_settings_alt</span>
            &nbsp;
            <p className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
              <span>Settings</span>
            </p>
            <span
              className={`material-symbols-outlined duration-100 ${
                isSubmenuOpen["Settings"] ? "rotate-180" : "rotate-0"
              } ${isClosed && "hidden"}`}
            >
              expand_more
            </span>
          </div>
          {/* submenu  */}

          <div
            ref={(ref) => (submenuRef.current["Settings"] = ref)}
            className={`flex flex-col gap-1 duration-200`}
            style={{
              maxHeight: isSubmenuOpen["Settings"]
                ? `${submenuRef.current["Settings"]?.scrollHeight}px`
                : "0",
            }}
          >
            {/* Submenu items */}
            <Link
              to="/snapchatFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Withdraw Options"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Categories", "Withdraw Options")}
            >
              <p>Withdraw Options</p>
            </Link>
            <Link
              to="/snapchatFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Ads Settings"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Categories", "Ads Settings")}
            >
              <p>Ads Settings</p>
            </Link>
            <Link
              to="/tiktokFilter"
              className={`py-3 pl-12 ${
                isSubmenuActive === "Contributor Setup"
                  ? "bg-primaryMain text-whiteHigh"
                  : "text-whiteHigh"
              }`}
              onClick={() => handleMenus("Categories", "Contributor Setup")}
            >
              <p>Contributor Setup</p>
            </Link>
          </div>
        </div>

        {/* staffs  */}

        <div className="w-full overflow-hidden capitalize">
          <Link
            to="/staffAll"
            className={`flex items-center pl-6 pr-3 py-4 cursor-pointer select-none ${
              isActive === "staffs" && "bg-primaryMain"
            }`}
            onClick={() => handleMenus("staffs", "")}
          >
            <span className="material-symbols-outlined">group</span>
            &nbsp;
            <p className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
              <span>staffs</span>
            </p>
          </Link>
        </div>

        {/* logout */}
        <div className="pl-6">
          <button className="btn-btn-ghost">
            <p className="flex items-center justify-center">
              <span className="material-symbols-outlined">Logout</span>
              <span className={`flex-1 ${isClosed && "hidden"} shrink-0`}>
                Logout
              </span>
            </p>
          </button>
        </div>
      </section>
      {/* <div className="pl-6">
        <button onClick={toggleSideNav} className="btn-btn-ghost">
          <span className="material-symbols-outlined">menu_open</span>
        </button>
      </div> */}
    </div>
  );
};

export default SideNav;
