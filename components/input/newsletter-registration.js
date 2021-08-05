import { useContext, useRef } from "react";

import NotificationContext from "../../store/notification-context";
import classes from "../../styles/newsletter-registration.module.css";

function NewsletterRegistration() {
  const emailRef = useRef();
  const notificationContext = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    notificationContext.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message || "Something went wrong.");
        });
      })
      .then((data) =>
        notificationContext.showNotification({
          title: "Successful",
          message: "Registration for newsletter is complete",
          status: "success",
        })
      )
      .catch((error) =>
        notificationContext.showNotification({
          title: "Failed",
          message: error.message || "Registration failed. Please try again.",
          status: "error",
        })
      );
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
