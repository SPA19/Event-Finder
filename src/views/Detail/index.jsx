import { format } from "date-fns";
import { es } from "date-fns/locale";
import styles from "./Detail.module.css";
import { useLoaderData } from "react-router-dom";
////////////////////////////////////////////////////////////////
const eventGoBack = () => {
  window.history.back();
};

const Detail = () => {
  const eventData = useLoaderData();
  return (
    <div className={styles.container}>
      <div>
        <button className={styles.button} onClick={eventGoBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      <div className={styles.mainInfoContainer}>
        <h4 className={styles.eventName}>{eventData.name}</h4>
        <img
          src={eventData.images?.[2].url}
          className={styles.eventImage}
          alt={eventData.name}
        />
        <p className={styles.infoParagraph}>{eventData.info}</p>

        {eventData.dates?.start.dateTime ? (
          <p className={styles.dateParagraph}>
            Fecha:{" "}
            {format(
              new Date(eventData.dates?.start?.dateTime),
              "eeee, d LLLL yyyy H:mm",
              { locale: es }
            )}
            hrs
          </p>
        ) : null}
        <p>
          Lugar: {eventData._embedded?.venues[0].name},{" "}
          {eventData._embedded?.venues[0].city.name},{" "}
          {eventData._embedded?.venues[0].state.stateCode}
        </p>
      </div>
      <div className={styles.seatInfoContainer}>
        <h6 className={styles.seatMapTitle}>Mapa del evento</h6>
        <img
          src={
            eventData.seatmap?.staticUrl ||
            "https://s1.ticketm.net/tmimages/venue/maps/mxc/103395s.gif"
          }
          className={styles.eventMap}
          alt="Seatmap event"
        />
        <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
        <p className={styles.priceRangeLegend}>
          Rango de precios: {eventData.priceRanges?.[0].min}
          {" - "}
          {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData.url} className={styles.ticketLink}>
        Ir por tus boletos
      </a>
    </div>
  );
};

export default Detail;
