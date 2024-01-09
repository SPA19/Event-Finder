import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";

const Events = () => {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data;

  const handleEventItemClick = (id) => {
    console.log('evento clickeado:', id);
  };

  const eventsComponent = events.map((eventItem) => (
    <EventItem
      key={`event-ticket-${eventItem.id}`}
      info={eventItem.info}
      name={eventItem.name}
      image={eventItem.images[0].url}
      onEventClick={handleEventItemClick}
      id={eventItem.id}
    />
  ));

  return (
    <div>
      Eventos
      {eventsComponent}
    </div>
  );
};

export default Events;
