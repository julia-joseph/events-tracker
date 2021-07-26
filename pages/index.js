import EventsList from "../components/events/events-list"
import { getFeaturedEvents } from "../dummy-data";


const FeaturedEventsPage = () => {
  const featuredEvents = getFeaturedEvents();
  console.log('events', featuredEvents);

  return (
    <div>
      <h1>Featured Events</h1>
      <EventsList
        items={featuredEvents}
      >
      </EventsList>
    </div>
  )
}

export default FeaturedEventsPage;