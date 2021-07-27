import { useRouter } from "next/router";
import EventItem from "../../components/events/event-item";
import { getEventById } from "../../dummy-data";

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
        <p>Event does not exist!!</p>
      }
    </div>
  )
}
  
export default EventPage;