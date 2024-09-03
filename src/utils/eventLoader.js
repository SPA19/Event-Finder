// src/routes/loaders/eventLoader.js

import eventFetcher from "./fetchEvents.js";

export const eventLoader = async ({ params }) => {
  const eventId = params.eventId;
  const eventDetail = await eventFetcher(eventId);
  return eventDetail;
};
