import { create } from "zustand";
import { LIKED_EVENTS_STORAGE_KEY } from "../utils/constants";
//Store para guardar valores o estados de manera global
const useStore = create((set) => ({
  data: [],
  error: null,
  isLoading: false,

  dataLiked: [],
  errorLiked: {},
  isLoadingLiked: false,

  fetchEvents: async (params) => {
    const apiCountry = import.meta.env.VITE_API_COUNTRY;
    const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
    try {
      set(() => ({ isLoading: true }));
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&countryCode=${apiCountry}${
          params?.length ? params : ""
        }`
      );
      const data = await response.json();

      set(() => ({ data, isLoading: false }));
    } catch (error) {
      set(() => ({ error: error.message, isLoading: false }));
    }
  },

  fetchEventsLiked: async () => {
    const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
    try {
      set(() => ({ isLoadingLiked: true }));
      const likeEvents =
        JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
      const results = [];

      for (const eventId of likeEvents) {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${apiKey}`
        );
        const data = await response.json();
        results.push(data);
      }

      set(() => ({ dataLiked: results, isLoadingLiked: false }));
    } catch (error) {
      set(() => ({ errorLiked: error.message, isLoadingLiked: false }));
    }
  },
}));

export default useStore;
