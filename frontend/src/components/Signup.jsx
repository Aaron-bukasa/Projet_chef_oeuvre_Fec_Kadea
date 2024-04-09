import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Signup() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    localStorage.removeItem("token");

    try {
      const response = await axios.post('https://projet-chef-oeuvre-fec-kadea-2.onrender.com/users/signup', {
        nom: `${data.prenom} ${data.nom}`,
        email: data.email,
        telephone: data.telephone,
        mot_de_passe: data.password
      });

      if (response.status === 201) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        window.location.href = '/'
      } else {
        console.error('Inscription échouée');
      }
    } catch (error) {
      console.error('Erreur Axios:', error);
    }
  };

  return (
    <div className="mx-6 my-12 md:my-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary-blue tracking-wider text-white p-6 w-full rounded-xl mb-12 mt-6 w-full md:max-w-[768px] md:mx-auto"
      >
        <h1 className="font-bold text-2xl text-center text-white p-6 sm:text-3xl md:text-4xl xl:text-5xl">
          Créer un compte
        </h1>
        <div className="pb-3">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="nom">Nom</label>
            <input
              {...register("nom", { required: true, pattern: /^[a-zA-Z]+$/ })}
              type="text"
              id="nom"
              name="nom"
              placeholder="Nom"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.nom && <span className="text-red-500">Ce champ est requis et doit contenir uniquement des lettres</span>}
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="prenom">Prénom</label>
            <input
              {...register("prenom", { required: true, pattern: /^[a-zA-Z]+$/ })}
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Prénom"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.prenom && <span className="text-red-500">Ce champ est requis et doit contenir uniquement des lettres</span>}
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="email">Adresse email</label>
            <input
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ })}
              type="text"
              id="email"
              name="email"
              placeholder="Adresse email"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.email && <span className="text-red-500">Ce champ est requis et doit être une adresse email valide</span>}
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="telephone">Numéro de téléphone</label>
            <input
              {...register("telephone", { required: true, pattern: /^(084|085|080|089|081|082|099|097|090)[0-9]{7}$/ })}
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Numéro de téléphone"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.telephone && <span className="text-red-500">Ce champ est requis et doit contenir exactement 10 chiffres</span>}
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="password">Mot de passe</label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.password && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <Link
            to="/login"
            className="block text-blue-400 text-lg text-right mr-3 tracking-wider"
          >
            Se connecter
          </Link>
        </div>
        <button
          type="submit"
          className="ml-6 bg-sky-blue text-white font-bold py-3 px-4 rounded-xl hover:opacity-80 tracking-wider"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}
