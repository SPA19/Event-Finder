import { create } from "zustand";

//Store para guardar valores o estados de manera global
const useEventsResults = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  fetchEvents: async (params) => {
    const apiCountry = import.meta.env.VITE_API_COUNTRY;
    const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
    try {
      await set(() => ({ isLoading: true }));
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&countryCode=${apiCountry}${
          params?.length ? params : ""
        }`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      await set(() => ({ data, isLoading: false }));
    } catch (error) {
      await set(() => ({ error }));
    }
  },
}));

export default useEventsResults;
