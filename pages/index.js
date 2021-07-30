import EventsList from "../components/events/events-list";
import { getFeaturedEvents } from "../utils/api-utils";


const FeaturedEventsPage = props => {
  return <EventsList items={props.featuredEvents}></EventsList>;
};

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: events
    }
  }
}

export default FeaturedEventsPage;
