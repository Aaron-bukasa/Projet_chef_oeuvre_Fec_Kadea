import logoFec from "../assets/images/logoFec.svg";
import bg_002 from "../assets/images/bg_002.jpg";
import CompteRebours from "./components/CompteRebours";
import { useRef, useState } from "react";
import Response from "./components/Response";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function confirmUser({ setIsLogin }) {
  const codeRef = useRef();
  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const url = window.location.href;

  const validateCode = async (event) => {
    event.preventDefault();
    const requestId = url.match(/(?<=.+\/confirmUser\/).+/)[0];
    const code = codeRef.current.value.trim();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/users/member/checkCode",
        { requestId: requestId, code: code }
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 200) {
        setIsError(false);
        setIsResponse(false);

        localStorage.setItem("isLogin", true);
        setIsLogin(true);
        return navigate("/");
      } else {
        setIsError(true);
        return setIsData("Inscription échouée");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      console.error(error);
      return setIsData("erreur lors de la soumission de la demande au serveur");
    }
  };

  const handleResendCode = async () => {
    const requestId = url.match(/(?<=.+\/confirmUser\/).+/)[0];
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/users/member/resendCodeConfirmation",
        { requestId: requestId }
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 201) {
        setIsLogin(true);
        setIsError(false);
        return setIsData(response.data);
      } else {
        setIsError(true);
        return setIsData("Inscription échouée");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      console.error(error);
      return setIsData("erreur lors de la soumission de la demande au serveur");
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-[-999]">
          <img src={bg_002} alt="" className="w-full h-full object-cover" />
        </div>
      <div className="flex flex-col justify-center items-center gap-y-8 p-3 min-h-screen roboto-regular sm:p-6 sm:gap-y-12 md:w-11/12 md:mx-auto lg:mx-auto lg:w-9/12 2xl:w-7/12 2xl:max-w-4xl">
        
        <div>
          <img src={logoFec} alt="logo de la fec" className="w-36 sm:w-48" />
        </div>
        <div className="linear-bg rounded-lg sm:p-6">
          <form action="" className="relative p-3" onSubmit={validateCode}>
            <h1 className="text-lg text-center font-semibold my-2 sm:text-2xl sm:my-6 lg:text-3xl xl:text-4xl">
              Confirmation de l'adresse e-mail
            </h1>
            <p className="sm:text-lg sm:mb-2">
              Nous vous avons envoyé un code de confirmation par e-mail.{" "}
              <span className="font-semibold">Ce code est nécessaire</span> pour
              confirmer votre adresse e-mail. Veuillez le copier et coller dans
              le champ ci-dessous. <span id="email-address"></span>
            </p>
            <input
              ref={codeRef}
              type="text"
              id="confirmation-code"
              placeholder="Entrez le code de confirmation"
              className="border-2 p-1 outline-none focus:bg-slate-100 text-black my-2 text-sm w-full rounded-md sm:text-base sm:p-2 sm:my-3"
            />
            <input
              type="submit"
              value="Confirmer l'e-mail"
              className="bg-btn-color text-white py-1 px-2 rounded-md mt-2 hover:opacity-80 sm:p-2 cursor-pointer"
            />
            <Response
              isLoading={isLoading}
              setIsResponse={setIsResponse}
              isResponse={isResponse}
              isError={isError}
              isData={isData}
            />
          </form>
          <CompteRebours onResendCode={handleResendCode} />
        </div>
      </div>
    </div>
  );
}
