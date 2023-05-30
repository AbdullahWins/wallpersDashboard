import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = (item, updateItemStatus, setCurrentItem) => {
  return (
    <td className="px-0 py-0">
      <div className="dropdown dropdown-bottom dropdown-end">
        <label
          tabIndex={1}
          className="rounded-lg px-2 py-1 w-24 focus:outline-none active:border-none text-primaryMain bg-primaryMainLightest"
        >
          Pending &nbsp;
          <i className="fa-solid fa-angle-down text-sm"></i>
        </label>
        <ul
          tabIndex={1}
          className="dropdown-content menu mt-2 m-0.5 shadow bg-base-100 rounded-md w-36"
        >
          <label
            onClick={() => updateItemStatus(item?._id, "Processing")}
            // htmlFor="ordersBlockPopup"
          >
            <li>
              <p className="text-successColor py-1 active:bg-blackLow w-full rounded-t-md">
                Confirm
              </p>
            </li>
          </label>
          <hr className="text-disabledColor opacity-10" />
          <li>
            <Link
              to={{
                pathname: `/itemEdit/${item?._id}`,
                item: item,
              }}
              className="py-1 active:bg-blackLow"
            >
              Edit
            </Link>
          </li>
          <hr className="text-disabledColor opacity-10" />
          <label
            onClick={() => setCurrentItem(item)}
            htmlFor="ordersBlockPopup"
          >
            <li>
              <p className="text-errorColor py-1 active:bg-blackLow rounded-b-md">
                Decline
              </p>
            </li>
          </label>
        </ul>
      </div>
    </td>
  );
};

export default DropdownMenu;
