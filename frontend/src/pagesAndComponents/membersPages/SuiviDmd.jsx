import { useEffect, useState } from "react";
import axios from "axios";

export default function SuiviDmd() {

    const [notifications, setNotifications] = useState([])

    const [user, setUser] = useState(window.localStorage.getItem("isLogin"));

    useEffect(() => {
      const handleStorageChange = () => {
        setUser(localStorage.getItem('isLogin'));
      };
    
      window.addEventListener('storage', handleStorageChange);
    
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`http://localhost:3000/suivi_user/${user.split(',')[0]}`, {
                email: user.split(',')[2]
            });

            if(response.status === 200) {
                setNotifications(response.data);
            }
        };
    
        fetchData();
      }, []);

  return (
    <div className="mx-auto border-2 border-gray-400 px-[10%] py-8 rounded-lg bg-gray-100">
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
