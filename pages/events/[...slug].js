import { useRouter } from "next/router";
import EventsList from "../../components/events/events-list";
import { getFilteredEvents } from "../../dummy-data";
import Alert from "../../ui/alert";

const FilteredEventsPage = () => {
  const router = useRouter();

  console.log("[FilteredEventsPage.js] ", router.query);

  const filter = router.query.slug;

  if (!filter) {
    return <p>Loading... </p>;
  }

  const year = +filter[0];
  const month = +filter[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2020 ||
    month < 1 ||
    month > 12
  ) {
    return <Alert><p>Invalid Filter!! Please check your values!</p></Alert>;
  }

  const filteredEvents = getFilteredEvents({
    year: year,
    month: month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <Alert><p>No events scheduled!</p></Alert>
  }

  return <EventsList items={filteredEvents}></EventsList>;
};

export default FilteredEventsPage;
