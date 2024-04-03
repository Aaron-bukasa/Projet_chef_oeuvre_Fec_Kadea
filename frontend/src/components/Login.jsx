import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Home from "./Home";

export default function Login({login, setIsName}) {

  const emailLoginRef = useRef();
  const passwordLoginRef = useRef();
  const [isUser, setIsUser] = useState(false);

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post('http://localhost:3000/users/login', {
        email: emailLoginRef.current.value,
        mot_de_passe: passwordLoginRef.current.value
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        const userRole = decoded.role;
        const userName = decoded.nom

        const requestOptions = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        if(userRole === 'utilisateur') {
          login(true);
          setIsUser(true);
          setIsName(userName.match(/[a-zA-Z]+/));
        } else if(userRole === 'administrateur') {
          // const response = await axios.get('http://localhost:3000/', requestOptions);
         window.location.href = "http://localhost:3000/";
        }
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  if(isUser) {
    return <Home />;
  }

  return (
    <div className="mx-6 my-12 md:my-24">
      <form
        action="/submit"
        method="POST"
        encType="multipart/form-data"
        className="bg-secondary-blue text-white p-6 w-full rounded-xl mb-12 mt-6 w-full md:max-w-[768px] md:mx-auto"
      >
        <h1 className="font-bold text-2xl text-center text-white p-6 sm:text-3xl md:text-4xl xl:text-5xl">
          Se connecter
        </h1>
        <div className="pb-3">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="email">Adresse email</label>
            <input
              ref={emailLoginRef}
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
              ref={passwordLoginRef}
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
          <Link
            to="/signup"
            className=" block text-blue-400 text-lg text-right mr-3 tracking-wider"
          >
            Créer un compte
          </Link>
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="ml-6 bg-sky-blue text-white font-bold bg-sky-blue py-3 px-4 rounded-xl hover:opacity-80"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
