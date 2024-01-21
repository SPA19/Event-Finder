// eslint-disable-next-line react/prop-types
// import { Link } from "react-router-dom";
import styles from "./EventItem.module.css";

const EventItem = ({ info, id, name, image, onEventClick }) => {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <div
      onClick={() => console.log("Padre clickeado")}
      className={styles.eventItemContainer}
    >
      <img src={image} alt={name} height={200} width={200} />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventsInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
          {/* <Link to={`/detail/${id}`}>Ver mas</Link> */}
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default EventItem;
