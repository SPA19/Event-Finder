import { useNavigate } from "react-router-dom";
import { memo } from "react";
import styles from "./Events.module.css"

import EventItem from "./components/EventItem";

const Events = ({ searchTerm, events }) => {
  const navigate = useNavigate();

  const handleEventItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm)
      );
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-ticket-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        clasification={eventItem.classifications[0].genre.name}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ));
  };

  return (
    <div>
      <h2>Eventos México</h2>
      <div className={styles.eventListContainer}>{renderEvents()}</div>
    </div>
  );
};

export default memo(Events);
