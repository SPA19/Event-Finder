import { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

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
        alignItems: "center",
        background: "#1279fd",
        border: "none",
        borderRadius: 5,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
        }}
      >
        <Link
          to={"/"}
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textDecoration: "none",
            paddingLeft: 18,
            color: "#fff",
          }}
        >
          Mi Boletera
        </Link>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
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
            border: "none",
            width: 200,
            background:"white",
            color:"black"
          }}
        />
        <Link
          to="/profile/my-info"
          style={{
            margin: 24,
            color: "#ffff",
            textDecoration: "none",
          }}
        >
          Mi perfil
        </Link>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
