import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "../../styles/comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
  const { eventId } = props;

  const notificationContext = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      setLoadingComments(true);

      fetch("/api/comments/" + eventId)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return response.json().then((data) => {
            setLoadingComments(false);
            throw new Error(data.message || "Something went wrong.");
          });
        })
        .then((data) => {
          setComments(data.comments);
          setLoadingComments(false);
        })
        .catch((error) =>
          notificationContext.showNotification({
            title: "Error",
            message: error.message || "Failed retrieve comments",
            status: "error",
          })
        );
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationContext.showNotification({
      title: "Adding comment..",
      message: "Processing your comment",
      status: "pending",
    });

    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong.");
        });
      })
      .then((data) => {
        setComments((prevStatus) => [...prevStatus, data.comments]);

        notificationContext.showNotification({
          title: "Successful",
          message: "Comment added",
          status: "success",
        });
      })
      .catch((error) =>
        notificationContext.showNotification({
          title: "Error",
          message: error.message || "Failed to add comment",
          status: "error",
        })
      );
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !loadingComments && <CommentList comments={comments} />}
      {showComments && loadingComments && <p>Loading comments.. </p>}
    </section>
  );
}

export default Comments;
