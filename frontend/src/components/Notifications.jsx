import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Notifications() {

    const [notifications, setNotifications] = useState([])

    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token);

    useEffect(() => {
      const fetchData = async () => {
          const response = await axios.post(`http://localhost:3000/suivi_utilisateur/${decoded.userId}`, {
              email: decoded.email
          });

          if(response.status === 200) {
            setNotifications(response.data);
          }

      };
      fetchData();
    }, []);

  return (
    <div className="max-w-[1024px] mx-auto border-2 border-gray-400 mx-6 my-12 rounded-lg bg-gray-100">
      <div className="p-6">
      <h1 className="text-center my-6">NOTIFICATIONS</h1>
      <ul className="flex flex-col-reverse gap-y-3">
        {notifications &&
          notifications.reverse().map((notification) => (
            <li
              key={notification.id}
              className="flex gap-x-6"
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
    </div>
  );
}
