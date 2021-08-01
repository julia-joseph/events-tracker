import Head from "next/head";

import EventsList from "../../components/events/events-list";
import EventsSearch from "../../components/events/events-search";
import { getEvents } from "../../utils/api-utils";

const EventsPage = props => {
  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a bunch of events you've been waiting for"
        />
      </Head>
      <EventsSearch></EventsSearch>
      <EventsList items={props.events}></EventsList>
    </>
  )
};

export async function getStaticProps() {
  const events = await getEvents();
  return {
    props: {
      events: events
    },
    revalidate: 60
  }
}



export default EventsPage;
