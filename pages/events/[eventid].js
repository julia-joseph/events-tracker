import EventItem from "../../components/events/event-item";
import Head from "next/head";

import {getEventById, getFeaturedEvents } from "../../utils/api-utils";
import Comments from "../../components/input/comments";

const EventPage = props => {
  const event = props.event;

  return (
    <div>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content={event.description}
        />
      </Head>
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
      <Comments eventId={event.id} />
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
  const events = await getFeaturedEvents();
  const paths = events.map(event => ({ params: { eventId: event.id }}))

  return {
    paths: paths,
    fallback: 'blocking'
  }
}
  
export default EventPage;