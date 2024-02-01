import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsResults from "../../state/events-results";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css"

const Home = () => {
  const { data, isLoading, error, fetchEvents } = useEventsResults();
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  const events = data?._embedded?.events || [];
  const page = data?.page || {};

    useEffect(() => {
      fetchEvents();
    }, []);

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = ({ selected }) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

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
