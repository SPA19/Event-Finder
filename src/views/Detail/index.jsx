import { format } from "date-fns";
import { es } from "date-fns/locale";
import styles from "./Detail.module.css";
import { useLoaderData } from "react-router-dom";
////////////////////////////////////////////////////////////////


const Detail = () => {
  const eventData = useLoaderData();
  return (
    <div className={styles.container}>
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
          src={eventData.seatmap?.staticUrl}
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
      <a href={eventData.url}>Ir por tus boletos</a>
    </div>
  );
};

export default Detail;
