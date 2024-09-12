import { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Global from "../../config/Global";

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
        <Link to={Global.baseUrlHome} className={styles.logo}>
          TickTrack
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
        <Link to={`${Global.baseUrlProfile}/my-info`} className={styles.profile}>
          Mi perfil
        </Link>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
