import React from "react";

const SearchBar = ({ value, onChange, tableName }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-primaryMainDarkest text-whiteHigh rounded-t-lg">
      <section className="flex items-center gap-4">
        <div>
          <p className="font-bold text-2xl">{tableName}</p>
        </div>
      </section>
      <section className="flex items-center gap-4 w-2/5">
        <input
          value={value}
          onChange={onChange}
          className="p-3 w-full input input-sm text-blackMid rounded-md border-none focus:outline-none focus:bg-whiteLow"
          type="text"
          name="searchInput"
          placeholder="search"
        />
      </section>
    </div>
  );
};

export default SearchBar;
