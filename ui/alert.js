import classes from '../styles/alert.module.css';
import Button from './button';

const Alert = (props) => {
    return (
        <>
            <div className={classes.container}>
                {props.children}
            </div>
            <div className={classes.button}>
                <Button link="/events">Show All Alerts</Button>
            </div>
        </>
    );
}

export default Alert;