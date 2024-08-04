import React, { useState, useContext } from "react";
import AppContext from '@context/AppContext';

import Image from "next/image";

import iconBack from "@icons/icon-back.svg";
import iconMobile from "@icons/icon-mobile.svg";
import plpLogo from "@logos/plp-logo.svg";

const Nav = () => {
  const { state, updateState, stepsViews, setStepsViews, clearPDTAInputs} = useContext(AppContext);

  const handlerBtnBack = () => {
    if (state.isRegister || state.isLogin) return;
    clearPDTAInputs();
    if (state.isRegisterPhone || state.isRegisterEmail) {
      updateState('isRegister');
      return;
    }
    if (state.isLoginPhone || state.isLoginEmail) {
      updateState('isLogin');
      return;
    }
    if (state.isPhoneConfirmation || state.isEmailConfirmation) {
      updateState(stepsViews[0]);
      setStepsViews([]);
      return;
    }
    if (state.isPaymentMethod) {
      updateState(stepsViews[1]);
      setStepsViews([stepsViews[0]]);
      return;
    }
    if (state.isPMPSE || state.isPMCARD) {
      updateState('isPaymentMethod');
      return;
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
