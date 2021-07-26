import EventItem from "./event-item";
import classes from '../../styles/events-list.module.css';

const EventsList = props => {
    const { items } = props;
    return (
        <ul className={classes.event_items}>
            {items.map(event => 
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    address={event.location}
                    date={event.date}
                    image={event.image}
                >
                </EventItem>
            )}
        </ul>
    )
}

export default EventsList;