import EventsList from "../../components/events/events-list";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
  const events = getAllEvents();
  return <EventsList items={events}></EventsList>;
};

export default EventsPage;
