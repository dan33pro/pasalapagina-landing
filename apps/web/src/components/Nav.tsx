import React, { useState, useContext } from "react";
import AppContext from '@context/AppContext';

import Image from "next/image";

import iconBack from "@icons/icon-back.svg";
import iconMobile from "@icons/icon-mobile.svg";
import plpLogo from "@logos/plp-logo.svg";

const Nav = () => {
  const { state, updateState } = useContext(AppContext);

  const handlerBtnBack = () => {
    if (state.isRegister || state.isLogin) return;
    if (state.isRegisterPhone || state.isRegisterEmail) {
      updateState('isRegister');
      return;
    }
    if (state.isLoginPhone || state.isLoginEmail) {
      updateState('isLogin');
    }
  };

  return (
    <nav
      className={`  relative grid place-items-center grid-cols-1
                    h-20 w-screen bg-[var(--bg-color)]
                    text-white shadow-lg overflow-hidden`}
    >
      {(!state.isRegister && !state.isLogin)  && (
        <button
          className="absolute left-[9vw] flex justify-center items-center gap-x-2.5"
          onClick={handlerBtnBack}
        >
          <Image
            className="brightness-200 h-8 w-auto"
            src={iconBack}
            alt={"Icono de volver atras"}
          />
          <span className="text-lg">Volver</span>
        </button>
      )}
      <div
        className={`h-auto w-screen flex items-center justify-center transition-transform ${(!state.isRegister && !state.isLogin)  ? "translate-x-1/4" : ""}`}
      >
        <Image
          className="h-8 w-auto"
          src={plpLogo}
          alt={"Logo de PasaLaPágina"}
        />
      </div>
      <Image
        className="absolute right-[3vw] h-8 w-auto"
        src={iconMobile}
        alt={"Icono de celular"}
      />
    </nav>
  );
};

export default Nav;
