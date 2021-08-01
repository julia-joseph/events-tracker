import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import useSWR from "swr";

import EventsList from "../../components/events/events-list";
import Alert from "../../ui/alert";

const FilteredEventsPage = () => {
  const [loadedEvents, setLoadedEvents] = useState();

  const router = useRouter();
  const filter = router.query.slug;

  const { data, error } = useSWR(
    "https://next-learn-493fd-default-rtdb.firebaseio.com/events.json"
  );

  console.log("[FilteredEventsPage.js] ", router.query);

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return <p>Loading... </p>;
  }

  const year = +filter[0];
  const month = +filter[1];

  let pageHeader = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`Lists all events happening on ${month}/${year}`}
      />
    </Head>
  );

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2020 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        {pageHeader}
        <Alert>
          <p>Invalid Filter!! Please check your values!</p>
        </Alert>
      </>
    );
  }

  if (error) {
    return (
      <>
        {pageHeader}
        <Alert>
          <p>Error Loading Events!</p>
        </Alert>
      </>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeader}
        <Alert>
          <p>No events scheduled!</p>
        </Alert>
      </>
    );
  }

  return (
    <>
      {pageHeader}
      <EventsList items={filteredEvents}></EventsList>
    </>
  );
};

export default FilteredEventsPage;
