import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import imgLogo from "../assets/images/logoFec.svg";
import imgFacebook from "../assets/images/facebook.svg";
import imgInstagram from "../assets/images/instagram.svg";
import imgTwitter from "../assets/images/twitter.png";
import imgLinkedin from "../assets/images/linkedin.svg";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.message = data.message
      .replace(/</g, "&#60;")
      .replace(/>/g, "&#62;")
      .replace(/{/g, "&#123;")
      .replace(/}/g, "&#125;");
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:3000/message/send",
        data
      );

      if (response.status === 200) {
        alert(response.data);
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error("Erreur Axios:", error);
    }
  };

  return (
    <div className="p-6 max-w-[1386px] mx-auto">
      <h1 className="font-bold text-center text-secondary-blue text-3xl mb-6 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Nous contactez
        </h1>
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-auto lg:gap-6 xl:gap-12">
        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
          <div>
            <h2 className="font-semibold text-xl my-4 lg:text-2xl tracking-wider">
              Fédération des entreprises du Congo
            </h2>
            <div className="border-2 border-gray-300 p-3 my-4 rounded-lg ">
              <p className="mb-2 text-lg">Adresse</p>
              <p>
                10 Av des aviateurs, Gombe,
                <br />
                Kinshasa, RDC
              </p>
            </div>
            <div className="border-2 border-gray-300 p-3 my-4 rounded-lg">
              <p className="py-1">
                Email :{" "}
                <a
                  href="mailto:contact@federation-entreprises-congo.fr"
                  className="text-black"
                >
                  contact@federation-entreprises-congo.fr
                </a>
              </p>
              <p className="py-1">
                Téléphone :{" "}
                <a href="tel:+243825505783" className="text-black">
                  +243825505783
                </a>
              </p>
            </div>
            <div className="border-2 border-gray-300 p-3 my-4 rounded-lg">
              <p className="mb-2 text-lg">Heure de travail</p>
              <p>
                Lundi – Vendredi: 8h00 – 16h00,
                <br />
                Samedi - Dimanche: Fermé.
              </p>
            </div>
          </div>
          <div className="my-6">
            <img
              src={imgLogo}
              alt="Logo de la fédération"
              className="w-[180px]"
            />
          </div>
          <div>
            <h2 className="font-semibold text-xl my-4 lg:text-2xl tracking-wider">
              Suivez-nous
            </h2>
            <div className="flex items-center gap-x-4 my-6">
              <Link to="#" className="hover:opacity-80">
                <img src={imgFacebook} alt="facebook" className="w-8" />
              </Link>
              <Link to="#" className="hover:opacity-80">
                <img src={imgInstagram} alt="instagramme" className="w-8" />
              </Link>
              <Link to="#" className="hover:opacity-80">
                <img src={imgTwitter} alt="twitter" className="w-8" />
              </Link>
              <Link to="#" className="hover:opacity-80">
                <img src={imgLinkedin} alt="twitter" className="w-8" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-2 md:mx-6 my-12 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            method="POST"
            encType="multipart/form-data"
            className="border-2 bg-gray-100 text-black p-6 w-full rounded-xl mb-12 max-w-[768px] md:mx-auto flex flex-col gap-y-6 pb-12 shadow-membre-box"
          >
            <h2 className="font-semibold text-xl my-4 lg:text-2xl tracking-wider text-center">
              Nous écrire
            </h2>
            <input
              {...register("nom", {
                required: "Nom complet requis",
                pattern: {
                  value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                  message: "Veuillez saisir un nom valide",
                },
              })}
              type="text"
              placeholder="Nom complet"
              className="border-2 h-10 rounded-lg text-black p-3 outline-none"
            />
            {errors.nom && <p className="text-red-500">{errors.nom.message}</p>}
            <input
              {...register("email", {
                required: "Adresse email requise",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Veuillez saisir une adresse email valide",
                },
              })}
              type="text"
              placeholder="Email"
              className="border-2 h-10 rounded-lg text-black p-3 outline-none"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <input
              {...register("objet", {
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Veuillez saisir un objet valide",
                },
              })}
              type="text"
              placeholder="Objet"
              className="border-2 h-10 rounded-lg text-black p-3 outline-none"
            />
            {errors.organisation && (
              <p className="text-red-500">{errors.objet.message}</p>
            )}
            <textarea
              id="message"
              placeholder="Entrez votre message ici"
              rows="5"
              className="p-3 rounded-lg border-2 outline-none"
              {...register("message", {
                required: "Ce champ est requis",
                maxLength: {
                  value: 256,
                  message: "Le message ne peut pas dépasser 100 caractères",
                },
              })}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
            <input
              type="submit"
              placeholder="Envoyer"
              className="text-white font-bold bg-red-600 p-3 rounded-xl hover:opacity-80 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
