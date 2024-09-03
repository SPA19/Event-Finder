const fetchEventDetail = async (eventId) => {
  try {
    const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching event details:", error);
  }
};

export default fetchEventDetail;
