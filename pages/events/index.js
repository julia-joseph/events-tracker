import EventsList from "../../components/events/events-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
  const events = getAllEvents();
  return (
    <>
      <EventsSearch></EventsSearch>
      <EventsList items={events}></EventsList>
    </>
  )
  
};

export default EventsPage;
