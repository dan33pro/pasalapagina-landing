import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import Image from "next/image";

import iconCards from "@icons/icon-cards.svg";
import iconPSE from "@icons/icon-pse.svg";

const PaymentMethod = () => {
  const { getBargain, updateState } = useContext(AppContext);

  const handlerCards = () => updateState("isPMCARD");
  const handlerPSE = () => updateState("isPMPSE");

  const handlerSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <section className="h-main flex items-center justify-center flex-col">
      <h2
        className=" text-2xl text-center text-[var(--ul-dark-grey)] pt-3.5 px-7 pb-7
                        border-b border-[var(--border-color)]"
      >
        Lee las revistas idénticas
        <br />a la edición impresa o ingresa
        <br />
        por la sección artículos para
        <br />
        leerlos y escucharlos
      </h2>
      <article>
        <p className="mt-6 py-5 text-center text-lg font-medium">
          Elige tu método de pago
        </p>
        <form className="px-4 grid gap-y-4" onSubmit={handlerSubmit}>
          <button
            type="button"
            onClick={handlerCards}
            className="flex items-center justify-between w-[370px] h-16 px-4 py-2 text-sm
                          font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                          border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                          focus:outline-none placeholder:font-normal hover:bg-[var(--white-color)] hover:brightness-110"
          >
            <span>Tarjeta Débito o Crédito</span>
            <Image src={iconCards} alt="Icono de cards" />
          </button>
          <button
            type="button"
            onClick={handlerPSE}
            className="flex items-center justify-between w-[370px] h-16 px-4 py-2 text-sm
                          font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                          border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                          focus:outline-none placeholder:font-normal hover:bg-[var(--white-color)] hover:brightness-110"
          >
            <span>Efectivo o Débito bancario PSE</span>
            <Image src={iconPSE} alt="Icono de pse" />
          </button>
          <div className="flex h-10 items-center justify-between bg-[var(--dark-red)] text-[--white-color] text-base px-4 py-2">
            <span>Total: </span>
            <span> {getBargain()}</span>
          </div>
        </form>
      </article>
    </section>
  );
};

export default PaymentMethod;
