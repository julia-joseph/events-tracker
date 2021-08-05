import { useContext } from "react";
import NotificationContext from "../store/notification-context";
import Notification from "../ui/notification";
import Header from "./main-header";

const Layout = (props) => {
  const context = useContext(NotificationContext);

  const notification = context.notification;

  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
};

export default Layout;
