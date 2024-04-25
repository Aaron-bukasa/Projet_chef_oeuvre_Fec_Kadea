import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import imgLogo from "../assets/images/logoFec.svg";
import imgFacebook from "../assets/images/facebook.svg";
import imgInstagram from "../assets/images/instagram.svg";
import imgTwitter from "../assets/images/twitter.png";
import imgLinkedin from "../assets/images/linkedin.svg";
import { useState } from "react";
import Response from "./Response";

export default function Contact() {
  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    setIsLoading(true);

    data.message = data.message
      .replace(/</g, "&#60;")
      .replace(/>/g, "&#62;")
      .replace(/{/g, "&#123;")
      .replace(/}/g, "&#125;");

    try {
      const response = await axios.post(
        "http://localhost:3000/messages/receive",
        data
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 200) {
        setIsError(false);
        return setIsData(response.data);
      } else {
        setIsError(true);
        return setIsData("Erreur lors de la soumission de la demande");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      return setIsData(
        "erreur lors de la soumission de votre demande au serveur"
      );
    }
  };

  return (
    <div className="bg-bg_desktop">
      <div className="p-6 max-w-screen-2xl mx-auto">
        <div className="mb-6 md:mb-12">
          <h1 className="font-bold text-center text-primary-blue text-3xl mb-4 pt-2 lg:mb-6 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Nous contactez
          </h1>
          <p className="text-justify md:text-center text-lg md:text-xl md:px-12">
            Que vous soyez un membre actuel, un futur membre ou un partenaire
            potentiel, nous sommes là pour vous.
          </p>
          <p className="text-justify text-lg md:text-xl md:px-12">
            Voici quelques raisons de nous contacter : En savoir plus sur les
            avantages de l'adhésion, Demander une adhésion, Poser des questions
            sur les partenariats, Obtenir de l'aide pour un problème lié à votre
            adhésion.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-auto lg:gap-6 xl:gap-12">
          <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 text-lg lg:text-xl">
            <div className="text-lg sm:xl">
              <h2 className="text-center sm:text-left font-semibold text-xl my-4 lg:text-2xl tracking-wider">
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
            <div >
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
          <div className="mx-2 md:mx-6 mb-4 mt-10 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 relative">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              method="POST"
              encType="multipart/form-data"
              className="linear-bg border-2 text-white p-6 w-full rounded-xl mb-6 md:mb-12 max-w-[768px] md:mx-auto flex flex-col gap-y-6 pb-12"
            >
              <h2 className="font-bold text-2xl text-secondary-blue text-center p-6 md:text-3xl xl:text-4xl">
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
              {errors.nom && (
                <p className="text-red-500">{errors.nom.message}</p>
              )}
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
                className="p-3 rounded-lg text-black border-2 outline-none"
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
                className="text-white font-bold bg-btn-color p-3 rounded-xl hover:opacity-80 cursor-pointer"
              />
            </form>
            <Response
              isLoading={isLoading}
              setIsResponse={setIsResponse}
              isResponse={isResponse}
              isError={isError}
              isData={isData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
