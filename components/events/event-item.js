import classes from '../../styles/event-item.module.css';
import Button from '../../ui/button';
import DateIcon from '../../icons/date-icon';
import AddressIcon from '../../icons/address-icon';
import ArrowRightIcon from '../../icons/arrow-right-icon';

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
                    <div className={classes.date}>
                        <span className={classes.icon}>
                            <DateIcon />
                        </span>
                        <time>{formattedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <span className={classes.icon}>
                            <AddressIcon />     
                        </span>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.button}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.arrow_icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;