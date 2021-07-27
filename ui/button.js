import Link from 'next/link';
import classes from '../styles/button.module.css';

const Button = props => {
    if(props.link) {
        return (
            <Link href={props.link}>
                <a className={classes.button}>{props.children}</a>
            </Link>
        )
    }

    return <button className={props.button} onClick={props.onClick}>{props.children}</button>
}

export default Button;