// eslint-disable-next-line react/prop-types
// import { Link } from "react-router-dom";
import styles from "./EventItem.module.css";

import useLikeEvents from "../../../../hooks/useLikeEvents";
import HeardFilled from "../../../../assets/hearth-filled.png";
import HeardUnfilled from "../../../../assets/hearth-unfilled.png";

const EventItem = ({ info, id, name, image, onEventClick }) => {
  const { isEventLiked, toggleEventLike } = useLikeEvents(id);

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  const handleHearthClilck = () => {
    toggleEventLike();
  };

  return (
    <div
      onClick={() => console.log("Padre clickeado")}
      className={styles.eventItemContainer}
    >
      <div className={styles.imageContainer}>
        <img
          src={isEventLiked ? HeardFilled : HeardUnfilled}
          alt="Hearth button"
          className={styles.hearthImage}
          onClick={handleHearthClilck}
        />
        <img src={image} alt={name} height={200} width={200} />
      </div>

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
