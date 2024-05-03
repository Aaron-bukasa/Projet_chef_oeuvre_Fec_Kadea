import React, { useState, useEffect } from 'react';

const CompteRebours = ({ onResendCode }) => {
  const [tempsRestant, setTempsRestant] = useState(30 * 60);
  const [boutonDesactive, setBoutonDesactive] = useState(false);

  useEffect(() => {
    const intervalleCompteARebours = setInterval(() => {
      setTempsRestant((tempsPrecedent) => tempsPrecedent - 1);

      if (tempsRestant <= 0) {
        clearInterval(intervalleCompteARebours);
        setBoutonDesactive(false);
      }
    }, 1000);

    return () => clearInterval(intervalleCompteARebours);
  }, []);

  const minutes = Math.floor(tempsRestant / 60);
  const secondes = tempsRestant % 60;

  const gererClicRenvoyerCode = () => {
    if (onResendCode) {
      onResendCode();
      setBoutonDesactive(true);
    }
  };

  return (
    <div className="flex gap-x-3 my-3 sm:mt-6">
      <button disabled={boutonDesactive} onClick={gererClicRenvoyerCode} className="underline text-secondary-blue font-semibold hover:opacity-70">
        Renvoyer le code
      </button>
      <span id="temps-restant" className="text-red-600 font-semibold">- {`${minutes}:${secondes.toString().padStart(2, '0')}`}</span>
    </div>
  );
};

export default CompteRebours;
