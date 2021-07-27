import Link from 'next/link';
import classes from '../styles/button.module.css';

const Button = props => {
    return (
        <Link href={props.link}>
            <a className={classes.button}>{props.children}</a>
        </Link>
    )
}

export default Button;