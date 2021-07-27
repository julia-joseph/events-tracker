import { useRouter } from "next/router";
import EventItem from "../../components/events/event-item";
import { getEventById } from "../../dummy-data";
import Alert from "../../ui/alert";

const EventPage = () => {
  const router = useRouter();

  const id = router.query.eventId;

  const event = getEventById(id);

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
        <Alert>
          <p>Event does not exist!!</p>
        </Alert>
      }
    </div>
  )
}
  
export default EventPage;