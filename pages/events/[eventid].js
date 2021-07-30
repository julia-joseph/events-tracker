import EventItem from "../../components/events/event-item";
import Alert from "../../ui/alert";
import { getEventById, getEventIdParams } from "../../utils/api-utils";

const EventPage = props => {
  const event = props.event;

  return (
    <div>
      {event &&
        <EventItem
            id={event.id}
            title={event.title}
            address={event.location}
            date={event.date}
            image={event.image}>
        </EventItem>
      }
      {!event &&
        <div>
          <p>Loading...</p>
        </div>
      }
    </div>
  )
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event: event
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const paths = await getEventIdParams();
  return {
    paths: paths,
    fallback: 'blocking'
  }
}
  
export default EventPage;