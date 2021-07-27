import EventsList from "../components/events/events-list";
import { getFeaturedEvents } from "../dummy-data";

const FeaturedEventsPage = () => {
  const featuredEvents = getFeaturedEvents();

  return <EventsList items={featuredEvents}></EventsList>;
};

export default FeaturedEventsPage;
