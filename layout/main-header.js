import classes from "../styles/header.module.css";
import Link from "next/link";
import EventIcon from "../icons/event-icon";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <a className={classes.icon}>
            <EventIcon />
          </a>
        </Link>
        <Link href="/">EvEnts</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
