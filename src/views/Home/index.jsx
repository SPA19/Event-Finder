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
    },
    [searchTerm, fetchEvents]
  );

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando resultados...</div>;
    }
    if (error) {
      return <div>Error al obtener los eventos</div>;
    }
    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabledPage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={currentPage}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSerch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  );
};

export default Home;
