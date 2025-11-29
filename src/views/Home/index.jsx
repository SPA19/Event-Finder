import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useStore from "../../state/events-results";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";

const Home = () => {
	const { data, isLoading, error, fetchEvents } = useStore();
	const events = useMemo(
		() => data?._embedded?.events || [],
		[data?._embedded?.events]
	);
	const page = useMemo(() => data?.page || {}, [data?.page]);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(0);
	const containerRef = useRef();
	const fetchMyEventsRef = useRef();

	fetchMyEventsRef.current = fetchEvents;

	useEffect(() => {
		fetchMyEventsRef.current();
	}, []);

	const handleNavbarSearch = (term) => {
		setSearchTerm(term);
		fetchEvents(`&keyword=${term}`);
	};

	const handlePageClick = useCallback(
		({ selected }) => {
			setCurrentPage(selected);
			fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
			// Scroll suave al inicio
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
		[searchTerm, fetchEvents]
	);

	const renderEvents = () => {
		if (isLoading) {
			return (
				<div className={styles.loadingContainer}>
					<div className={styles.loadingContent}>
						<div className={styles.loadingSpinner}></div>
						<p className={styles.loadingText}>
							✨ Cargando eventos increíbles...
						</p>
					</div>
				</div>
			);
		}

		if (error) {
			return (
				<div className={styles.errorContainer}>
					<div className={styles.errorContent}>
						<span className={styles.errorIcon}>⚠️</span>
						<h3 className={styles.errorTitle}>¡Oops! Algo salió mal</h3>
						<p className={styles.errorMessage}>
							No pudimos cargar los eventos en este momento. Por favor, intenta
							nuevamente.
						</p>
						<button
							className={styles.retryButton}
							onClick={() => fetchEvents()}
						>
						Reintentar
						</button>
					</div>
				</div>
			);
		}

		return (
			<div className={styles.eventsWrapper}>
				<Events
					searchTerm={searchTerm}
					events={events}
				/>
				{page.totalPages > 1 && (
					<ReactPaginate
						className={styles.pagination}
						nextClassName={styles.next}
						previousClassName={styles.previous}
						pageClassName={styles.page}
						activeClassName={styles.activePage}
						disabledClassName={styles.disabledPage}
						breakLabel=". . ."
						nextLabel="➡"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						pageCount={page.totalPages}
						previousLabel="⬅"
						renderOnZeroPageCount={null}
						forcePage={currentPage}
					/>
				)}
			</div>
		);
	};

	return (
		<div className={styles.homeContainer}>
			<Navbar
				onSerch={handleNavbarSearch}
				ref={containerRef}
			/>
			{renderEvents()}
		</div>
	);
};

export default Home;