// eslint-disable-next-line react/prop-types
const EventItem = ({ info, id, name, image, onEventClick }) => {
  return (
    <div>
      <img src={image} alt={name} height={200} width={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={() => onEventClick(id)}>Ver mas</button>
    </div>
  );
};

export default EventItem;
