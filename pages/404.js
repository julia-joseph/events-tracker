import Link from 'next/link';
import classes from '../styles/404.module.css'

const NotFoundPage = () => {
    return (
        <div className="container">
            <div className={classes.background}>
                <div className="container-fluid">
                    <img src="not-found.png" className={classes.image}></img> 
                    <h1>Page Not Found</h1>
                    <p className={classes.lineOne}> 
                        The page you are currently trying to access does not exist. 
                    </p>
                    <p className={classes.lineTwo}>
                        Please <Link href="/"><span className={classes.url}>click here</span></Link> to redirect to the main page.
                    </p>
                </div>
            </div>
        </div>
    )
  }
  
export default NotFoundPage;