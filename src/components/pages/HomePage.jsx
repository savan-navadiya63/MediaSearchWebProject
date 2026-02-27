import ResutlGrid from "../ResutlGrid";
import SearchBar from "../SearchBar";
import Tabs from "../Tabs";
import { useSelector } from "react-redux";
const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  console.log(query);

  return (
    <div className="w-full min-h-screen">
      <SearchBar />

      {query != "" ? (
        <div className="w-full">
          {" "}
          <Tabs /> <ResutlGrid />{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
