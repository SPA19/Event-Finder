import { useState } from "react";

const Navbar = ({ onSerch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSerch(search);
    }
  };

  return (
    <div>
      <p>Mi Boletera</p>
      <input
        placeholder="Buscar evento"
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={search}
      />
    </div>
  );
};

export default Navbar;
