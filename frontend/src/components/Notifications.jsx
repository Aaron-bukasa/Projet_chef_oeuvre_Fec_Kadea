import { useState } from "react";
import axios from "axios";

export default function Notifications() {

    const [notifications, setNotifications] = useState([])


  return (
    <div>
      <h1>NOTIFICATIONS</h1>
      <ul>
        {notifications &&
          notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex flex-nowrap hover:bg-gray-400 hover:text-secondary-blue px-3 hover:cursor-pointer"
            >
              <p>
                {new Date(notification.date).toLocaleString("en-GB", {
                  timeZone: "UTC",
                })}
              </p>
              <p>{notification.notifications}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
