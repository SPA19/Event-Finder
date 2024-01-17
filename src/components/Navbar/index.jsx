import { useState, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSerch }, ref) => {
  const [search, setSearch] = useState("");

  useImperativeHandle(ref, () => ({
    search,
  }));

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSerch(search);
    }
  };

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 14,
        width: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
        }}
      >
        <p style={{ fontSize: 24, fontWeight:"bold" }}>Mi Boletera</p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems:"center",
          justifyContent: "flex-end"
        }}
      >
        <input
          placeholder="Buscar evento"
          onKeyDown={handleInputKeyDown}
          onChange={handleInputChange}
          value={search}
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border:"none",
            width:200,
          }}
        />
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
