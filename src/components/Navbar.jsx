import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-10 bg-(--c1) flex-wrap gap-4">
      <Link to="/" className="font-medium text-xl sm:text-2xl">
        MediaSearch
      </Link>
      <div className="flex gap-2 sm:gap-5 items-center flex-wrap justify-center">
        <Link
          className="text-sm sm:text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-3 sm:px-4 py-1 sm:py-2"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-sm sm:text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-3 sm:px-4 py-1 sm:py-2"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
