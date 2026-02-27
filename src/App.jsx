import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CollectionPage from "./components/pages/CollectionPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen w-full text-white bg-gray-950 overflow-x-hidden">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default App;
