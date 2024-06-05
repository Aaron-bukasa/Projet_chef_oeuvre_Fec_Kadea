import { useEffect, useState } from "react";
import axios from "axios";

export default function SuiviDmd() {
  const [notifications, setNotifications] = useState([]);
  const userId = localStorage.getItem("userId");
  console.log(userId);

  useEffect(() => {
    const verifiedRole = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token non trouvé dans le localStorage");
          return;
        }

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await axios.get(
          `https://projet-chef-oeuvre-fec-kadea.onrender.com/users/member/${userId}`
        );

        if (response.status === 200) {
          setNotifications(response.data.suivi_user);
        } else {
          console.error(response.data);
        }
      } catch (error) {
        console.error("Erreur lors de la connexion au serveur :", error);
      }
    };

    verifiedRole();
  }, [userId]);

  return (
    <div className="mx-auto border-2 border-gray-400 px-[10%] py-8 rounded-lg bg-gray-100">
      <div className="p-6">
        <h1 className="text-center my-6">NOTIFICATIONS</h1>
        <ul className="flex flex-col-reverse gap-y-3">
          {notifications &&
            notifications.reverse().map((notification) => (
              <li key={notification.id} className="flex gap-x-6">
                <p>{new Date(notification.date).toLocaleString()}</p>
                <p>{notification.notifications}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
