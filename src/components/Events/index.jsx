import { useNavigate } from "react-router-dom";
import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/EventItem";

const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventsData();
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
        info={eventItem.info}
        name={eventItem.name}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ));
  };

  if (error) {
    return <div>Error al obtener los eventos</div>;
  }
  if (isLoading) {
    return <div>Cargando resultados...</div>;
  }

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
