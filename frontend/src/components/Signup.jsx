import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="mx-6 my-12 md:my-24">
      <form
        action="/submit"
        method="POST"
        encType="multipart/form-data"
        className="bg-secondary-blue tracking-wider text-white p-6 w-full rounded-xl mb-12 mt-6 w-full md:max-w-[768px] md:mx-auto"
      >
        <h1 className="font-bold text-2xl text-center text-white p-6 sm:text-3xl md:text-4xl xl:text-5xl">
          Créer un compte
        </h1>
        <div className="pb-3">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Nom"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Adresse email"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
          <Link
            to="/login"
            className="block text-blue-400 text-lg text-right mr-3 tracking-wider"
          >
            Se connecter
          </Link>
        </div>
        <button
          type="button"
          className="ml-6 bg-sky-blue text-white font-bold bg-sky-blue py-3 px-4 rounded-xl hover:opacity-80 tracking-wider"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}
