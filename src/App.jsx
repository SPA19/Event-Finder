import { useState } from "react";
import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSerch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
