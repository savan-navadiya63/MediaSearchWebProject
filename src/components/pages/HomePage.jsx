import ResutlGrid from "../ResutlGrid";
import SearchBar from "../SearchBar";
import Tabs from "../Tabs";
import { useSelector } from "react-redux";
const Home = () => {

    const { query} = useSelector((store) => store.search,);
    console.log(query);
    
  return (
    <div> 

      
      <SearchBar />
      
      {query != "" ?<div> <Tabs /> <ResutlGrid /> </div> : ''}

    </div>
  );
};

export default Home;
