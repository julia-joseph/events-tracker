import classes from "../../styles/comment-list.module.css";

function CommentList(props) {
  const comments = props.comments;
  return (
    <ul className={classes.comments}>
      {comments &&
        comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        ))}
      {!comments && <p>No comments</p>}
    </ul>
  );
}

export default CommentList;
