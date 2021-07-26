import Link from 'next/link';
import classes from '../../styles/event-item.module.css';

const EventItem = props => {
    const { title, image, date, address, id } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = address.replace(', ', '\n');

    const exploreLink = `/events/${id}`

    return (
        <li className={classes.card}>
            <img src={'/' + image} alt={title} className={classes.image}></img>
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{formattedDate}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem;