import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import Global from "../../config/Global";

const Profile = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div>
    <Link to={Global.baseUrlHome} className={styles.homeLink}>Inicio</Link>
      <div className={styles.tabsContainer}>
        <span
          className={`${pathname.includes("my-info") ? styles.active : ""} ${
            styles.tab
          }`}
          onClick={() => handleTabClick("my-info")}
          style={{
            marginRight: 12,
          }}
        >
          Mi informacion
        </span>
        <span
          className={`${
            pathname.includes("liked-events") ? styles.active : ""
          } ${styles.tab}`}
          onClick={() => handleTabClick("liked-events")}
        >
          Eventos favoritos
        </span>
      </div>
      <Outlet />
    </div>
  );
};
export default Profile;
