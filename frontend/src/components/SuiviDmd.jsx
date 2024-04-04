import { useEffect, useRef, useState } from "react";
import axios from "axios";

function SuiviDmd() {
  const nomRef = useRef();
  const idRef = useRef();
  const [isNotifications, setIsNotifications] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const id = idRef.current.value;
      const nom = nomRef.current.value;

      console.log(id, nom);

      const response = await axios.post(`http://localhost:3000/suivi_demande/${id}`, {
        nom: nom
      });

      if (response.status === 200) {
        setIsNotifications(response.data);
      } else {
        console.error("erreur d'envoi");
      }
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  return (
    <div className="mx-6 my-12 md:my-24">
      <form
        onSubmit={handleSubmit}
        className="bg-secondary-blue text-white p-6 w-full rounded-xl mb-12 mt-6 w-full md:max-w-[768px] md:mx-auto"
      >
        <h1 className="font-bold text-xl text-center text-white p-6 sm:text-2xl md:text-3xl xl:text-4xl">
          Suivi de la demande
        </h1>
        <div className="pb-3">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="nom">Prénom et Nom</label>
            <input
              ref={nomRef}
              type="text"
              id="nom"
              name="nom"
              placeholder="Entrer votre prénom et nom"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="number">Numéro de la demande</label>
            <input
              ref={idRef}
              type="number"
              id="number"
              name="number"
              placeholder="Entrer le numéro de votre demande"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-sky-blue text-white font-bold py-3 px-6 rounded-xl hover:opacity-80"
        >
          Suivre
        </button>
      </form>
      <div className="font-bold text-lg italic p-6 w-full rounded-xl mb-12 mt-6 w-full md:max-w-[768px] md:mx-auto border-4">
        <ul>
        {Array.isArray(isNotifications) && isNotifications.map((notification) => (
          <li key={notification.id}>
            <p>{notification.date}</p>
            <p>{notification.evenement}</p>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default SuiviDmd;