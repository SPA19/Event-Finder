import { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

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
    <div ref={ref} className={styles.container}>
      <div className={styles.containerLogo}>
        <Link to={"/"} className={styles.logo}>
          Mi Boletera
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <input
          placeholder="Buscar evento"
          onKeyDown={handleInputKeyDown}
          onChange={handleInputChange}
          value={search}
          className={styles.inputSearch}
        />
        <Link
          to="/profile/my-info"
          className={styles.profile}
        >
          Mi perfil
        </Link>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
