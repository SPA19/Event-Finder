import { format } from "date-fns";
import { es } from "date-fns/locale";
import styles from "./Detail.module.css";
import { useLoaderData } from "react-router-dom";

const eventGoBack = () => {
	window.history.back();
};

const Detail = () => {
	const eventData = useLoaderData();
	const imageNotFound =
		"https://s1.ticketm.net/tmimages/venue/maps/mxc/103395s.gif";

	return (
		<div className={styles.container}>
			{/* Botón de regresar */}
			<button
				className={styles.button}
				onClick={eventGoBack}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
			</button>

			{/* Hero Section - Imagen principal con título */}
			<div className={styles.heroSection}>
				<img
					src={eventData.images?.[2]?.url || eventData.images?.[0]?.url}
					className={styles.eventImage}
					alt={eventData.name}
				/>
				<div className={styles.imageOverlay}>
					<h1 className={styles.eventName}>{eventData.name}</h1>
				</div>
			</div>

			{/* Contenedor principal de información */}
			<div className={styles.mainInfoContainer}>
				{/* Grid de información */}
				<div className={styles.infoGrid}>
					{/* Descripción del evento */}
					{eventData.info && (
						<div className={`${styles.infoCard} ${styles.descriptionSection}`}>
							<h2 className={styles.sectionTitle}>Acerca del evento</h2>
							<p className={styles.infoParagraph}>{eventData.info}</p>
						</div>
					)}

					{/* Detalles del evento */}
					<div className={`${styles.infoCard} ${styles.detailsSection}`}>
						{/* Fecha */}
						{eventData.dates?.start?.dateTime && (
							<div className={styles.detailItem}>
								<div className={styles.detailIcon}>📅</div>
								<div className={styles.detailContent}>
									<p className={styles.detailLabel}>Fecha y Hora</p>
									<p className={styles.detailValue}>
										{format(
											new Date(eventData.dates.start.dateTime),
											"eeee, d 'de' LLLL yyyy",
											{ locale: es }
										)}
										<br />
										{format(new Date(eventData.dates.start.dateTime), "HH:mm", {
											locale: es,
										})}{" "}
										hrs
									</p>
								</div>
							</div>
						)}

						{/* Lugar */}
						{eventData._embedded?.venues?.[0] && (
							<div className={styles.detailItem}>
								<div className={styles.detailIcon}>📍</div>
								<div className={styles.detailContent}>
									<p className={styles.detailLabel}>Ubicación</p>
									<p className={styles.detailValue}>
										{eventData._embedded.venues[0].name}
										<br />
										{eventData._embedded.venues[0].city?.name},{" "}
										{eventData._embedded.venues[0].state?.stateCode}
									</p>
								</div>
							</div>
						)}

						{/* Género/Clasificación */}
						{eventData.classifications?.[0]?.genre?.name && (
							<div className={styles.detailItem}>
								<div className={styles.detailIcon}>🎭</div>
								<div className={styles.detailContent}>
									<p className={styles.detailLabel}>Categoría</p>
									<p className={styles.detailValue}>
										{eventData.classifications[0].genre.name}
										{eventData.classifications[0].segment?.name &&
											` - ${eventData.classifications[0].segment.name}`}
									</p>
								</div>
							</div>
						)}

						{/* Precio */}
						{eventData.priceRanges?.[0] && (
							<div className={styles.detailItem}>
								<div className={styles.detailIcon}>💰</div>
								<div className={styles.detailContent}>
									<p className={styles.detailLabel}>Rango de Precios</p>
									<p className={styles.detailValue}>
										{eventData.priceRanges[0].currency} $
										{eventData.priceRanges[0].min} - $
										{eventData.priceRanges[0].max}
									</p>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Sección del mapa */}
				{eventData.seatmap?.staticUrl && (
					<div className={styles.mapSection}>
						<h2 className={styles.seatMapTitle}>Mapa del Evento</h2>
						<div className={styles.mapContainer}>
							<img
								src={eventData.seatmap.staticUrl || imageNotFound}
								className={styles.eventMap}
								alt="Mapa del evento"
							/>
						</div>
					</div>
				)}

				{/* Información adicional */}
				<div className={styles.additionalInfo}>
					{/* Nota importante */}
					{eventData.pleaseNote && (
						<div className={styles.infoBox}>
							<h3 className={styles.infoBoxTitle}>⚠️ Información Importante</h3>
							<p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
						</div>
					)}

					{/* Precio destacado */}
					{eventData.priceRanges?.[0] && (
						<div className={styles.infoBox}>
							<h3 className={styles.infoBoxTitle}>💵 Precio Desde</h3>
							<p className={styles.priceRangeLegend}>
								${eventData.priceRanges[0].min}{" "}
								{eventData.priceRanges[0].currency}
							</p>
						</div>
					)}
				</div>

				{/* Botón de compra de boletos */}
				<div className={styles.ticketSection}>
					<a
						href={eventData.url}
						className={styles.ticketLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Comprar Boletos
					</a>
				</div>
			</div>
		</div>
	);
};

export default Detail;