import React, { useState } from "react";
import Image from "next/image";

import iconBack from "@icons/icon-back.svg";
import iconMobile from "@icons/icon-mobile.svg";
import plpLogo from "@logos/plp-logo.svg";

const Nav = () => {
  const [isActiveBack, setIsActiveBack] = useState<boolean>(true);
  const handlerIsActiveBack = (newState: boolean) => setIsActiveBack(newState);

  const handlerBtnBack = () => handlerIsActiveBack(false);

  return (
    <nav
      className={` relative grid place-items-center grid-cols-1
                      h-[10vh] max-h-20 w-screen bg-[var(--bg-color)]
                      text-white shadow-lg overflow-hidden`}
    >
      {isActiveBack && (
        <button className="absolute left-12 flex justify-center items-center gap-x-2.5" onClick={handlerBtnBack}>
          <Image
            className="brightness-200 h-8 w-auto"
            src={iconBack}
            alt={"Icono de volver atras"}
          />
          <span>Volver</span>
        </button>
      )}
      <div
        className={`h-auto w-screen flex items-center justify-center transition-transform ${isActiveBack ? "translate-x-1/4" : ""}`}
      >
        <Image
          className="h-8 w-auto"
          src={plpLogo}
          alt={"Logo de PasaLaPágina"}
        />
      </div>
      <Image
        className="absolute right-12 h-8 w-auto"
        src={iconMobile}
        alt={"Icono de celular"}
      />
    </nav>
  );
};

export default Nav;
