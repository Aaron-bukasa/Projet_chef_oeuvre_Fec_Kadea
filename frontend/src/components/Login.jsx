import dotenv from 'dotenv';
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${url}/users/login`, {
        email: data.email,
        mot_de_passe: data.password
      });

      if (response.status === 200) {        
          window.location.href = '/';
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  return (
    <div className="mx-6 my-12 md:my-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary-blue text-white p-6 w-full rounded-xl mb-12 mt-6 w-full md:max-w-[768px] md:mx-auto"
      >
        <h1 className="font-bold text-2xl text-center text-white p-6 sm:text-3xl md:text-4xl xl:text-5xl">
          Se connecter
        </h1>
        <div className="pb-3">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="email">Adresse email</label>
            <input
              {...register("email", {
                required: 'Adresse email requise',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: 'Adresse email invalide'
                }
              })}
              type="text"
              id="email"
              name="email"
              placeholder="Adresse email"
              className={`border-2 h-10 rounded-lg text-black p-3 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="password">Mot de passe</label>
            <input
              {...register("password", { required: 'Mot de passe requis' })}
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              className={`border-2 h-10 rounded-lg text-black p-3 ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <Link
            to="/signup"
            className=" block text-blue-400 text-lg text-right mr-3 tracking-wider"
          >
            Créer un compte
          </Link>
        </div>
        <button
          type="submit"
          className="ml-6 bg-sky-blue text-white font-bold bg-sky-blue py-3 px-4 rounded-xl hover:opacity-80"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
