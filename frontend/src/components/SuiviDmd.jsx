import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SuiviDmd() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isNotifications, setIsNotifications] = useState([]);

  const onSubmit = async (data) => {
    console.log(data.number);
    try {
      const response = await axios.post(`http://localhost:3000/suivi_demande/${data.number}`, {
        nom: data.nom
      });

      if (response.status === 200) {
        setIsNotifications(response.data);
      } else {
        console.error("Erreur d'envoi");
      }
    } catch (error) {
      console.error("Axios error:", error);
    }

    reset();
  };

  return (
    <div className="mx-6 my-12 md:my-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary-blue text-white p-6 w-full rounded-xl mb-12 mt-6 w-full md:max-w-[768px] md:mx-auto"
      >
        <h1 className="font-bold text-xl text-center text-white p-6 sm:text-2xl md:text-3xl xl:text-4xl">
          Suivi de la demande
        </h1>
        <div className="pb-3">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="nom">Prénom et Nom</label>
            <input
              {...register("nom", { required: true, pattern: /^[a-zA-Z]+ [a-zA-Z]+$/ })}
              type="text"
              id="nom"
              name="nom"
              placeholder="Entrer votre prénom et nom"
              className={`border-2 h-10 rounded-lg text-black p-3 ${errors.nom ? 'border-red-500' : ''}`}
            />
            {errors.nom && <p className="text-red-500">Prénom et Nom requis et ne doit contenir que des lettres.</p>}
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="number">Numéro de la demande</label>
            <input
              {...register("number", { required: true, pattern: /^[0-9]+$/ })}
              type="text"
              id="number"
              name="number"
              placeholder="Entrer le numéro de votre demande"
              className={`border-2 h-10 rounded-lg text-black p-3 ${errors.number ? 'border-red-500' : ''}`}
            />
            {errors.number && <p className="text-red-500">Numéro de la demande requis et ne doit contenir que des chiffres.</p>}
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
        {isNotifications && isNotifications.map((notification) => (
          <li key={notification.id} className="flex gap-x-6 p-3 border-bottom-2">
            <p>{new Date(notification.date).toLocaleString('en-GB', { timeZone: 'UTC' })}</p>
            <p>{notification.evenement}</p>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default SuiviDmd;
