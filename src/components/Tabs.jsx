import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/serchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "GIFs"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex flex-wrap items-center justify-center mt-4 px-4 gap-2 sm:gap-3">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${activeTab == elem ? "bg-blue-600" : "bg-gray-600"}  text-white text-sm sm:text-base px-3 sm:px-4 py-2 rounded-md cursor-pointer active:scale-95 transition`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
