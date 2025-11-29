import { useNavigate } from "react-router-dom";
import { memo, useMemo } from "react";
import styles from "./Events.module.css";
import Global from "../../config/Global";

import EventItem from "./components/EventItem";

const Events = ({ searchTerm, events }) => {
	const navigate = useNavigate();

	const handleEventItemClick = (id) => {
		navigate(`${Global.baseUrlDetail}/${id}`);
	};

	const filteredEvents = useMemo(() => {
		if (searchTerm.length > 0) {
			return events.filter((item) =>
				item.name.toLocaleLowerCase().includes(searchTerm)
			);
		}
		return events;
	}, [events, searchTerm]);

	const containerClasses = `${styles.eventListContainer} ${
		filteredEvents.length === 1 ? styles.singleItem : ""
	}`;

	const renderEvents = () => {
		return filteredEvents.map((eventItem, index) => (
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
			<div className={styles.headerContainerStyle}>
				<h2 className={styles.headerTitleStyle}>🎭 Eventos en México</h2>
				{searchTerm && (
					<p className={styles.searchInfoStyle}>
						Mostrando {filteredEvents.length} resultado
						{filteredEvents.length !== 1 ? "s" : ""} para "{searchTerm}"
					</p>
				)}
				<p className={styles.subtitleStyle}>Descubre los mejores eventos y experiencias</p>
			</div>
			<div className={containerClasses}>{renderEvents()}</div>
		</div>
	);
};

export default memo(Events);
