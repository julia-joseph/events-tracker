import classes from '../../styles/comment-list.module.css';

function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Jewels</address>
        </div>
      </li>
      <li>
        <p>My comment is more amazing!</p>
        <div>
          By <address>Roxy</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
