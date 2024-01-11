// eslint-disable-next-line react/prop-types
const EventItem = ({ info, id, name, image, onEventClick }) => {

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <div onClick={() => console.log("Padre clickeado")}>
      <img src={image} alt={name} height={200} width={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver mas</button>
    </div>
  );
};

export default EventItem;
