import { useEffect, useRef } from "react";
import EventItem from "../../../../components/Events/components/EventItem";
import { useNavigate } from "react-router-dom";
import styles from "../../../../components/Events/Events.module.css";
import useStore from "../../../../state/events-results";

const LikedEvents = () => {
  const { dataLiked, errorLiked, isLoadingLiked, fetchEventsLiked } =
    useStore();
  const navigate = useNavigate();
  const fetchEventsRef = useRef();
  fetchEventsRef.current = fetchEventsLiked

  useEffect(() => {
    fetchEventsRef.current();
  }, []);

  const handleEventItemClick = (eventId) => {
    navigate(`/detail/${eventId}`);
  };

  const containerClasses = `${styles.eventListContainer} ${
    dataLiked.length === 1 ? styles.singleItem : ""
  }`;

  if (Object.keys(errorLiked) > 0) {
    return <div>Ha ocurrido un error: {JSON.stringify(errorLiked)}</div>;
  }

  if (isLoadingLiked) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className={containerClasses}>
        {dataLiked.map((event, index) => (
          <EventItem
            key={`liked-event-item-${event.id}-${index}`}
            info={event.info}
            name={event.name}
            clasification={event.classifications[0].genre.name}
            image={event.images[0].url}
            onEventClick={handleEventItemClick}
            id={event.id}
          />
        ))}
      </div>
    </>
  );
};

export default LikedEvents;
