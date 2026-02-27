import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/serchSlice";

const SearchBar = () => {
  const [text, settext] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault(); //form submit hote hi page reload ho jata hai, isliye preventDefault use karte hai taki page reload na ho.

    dispatch(setQuery(text));

    settext("");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 bg-(--c2) p-4 rounded-lg"
      >
        <input
          required
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-white px-3 py-2 rounded-md w-full sm:flex-1"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <button className="bg-(--c3) active:scale-95 text-white px-4 py-2 rounded-md sm:ml-2 w-full sm:w-auto cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
