import Head from "next/head";
import EventsList from "../components/events/events-list";
import { getFeaturedEvents } from "../utils/api-utils";

const FeaturedEventsPage = (props) => {
  return (
    <>
      <Head>
        <title>Events Tracker</title>
        <meta
          name="description"
          content="Find a bunch of events you've been waiting for"
        />
      </Head>
      <EventsList items={props.featuredEvents}></EventsList>
    </>
  );
};

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: events
    },
    revalidate: 1200
  }
}

export default FeaturedEventsPage;
