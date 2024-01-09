import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  console.log(search);

  return (
    <div>
      <p>My Boletera</p>
      <input
        placeholder="Buscar evento"
        onChange={handleInputChange}
        value={search}
      />
    </div>
  );
};

export default Navbar;
