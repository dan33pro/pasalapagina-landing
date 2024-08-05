import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import Image from "next/image";

import iconPSE from "@icons/icon-pse.svg";

const PMpse = () => {
  const { getBargain } = useContext(AppContext);

  const handlerSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <section className="h-main flex items-center justify-center flex-col">
      <h2
        className=" grid grid-rows-2 text-2xl text-center text-[var(--ul-dark-grey)] py-3.5 px-7
                        border-b border-[var(--border-color)]"
      >
        <span>
          Realiza el pago con tu
          <br />
          cuenta débito bancaria
        </span>
        <div
          className="flex items-center justify-between h-16 px-2 py-2 text-sm
                          font-medium text-[var(--dark-grey)] bg-[var(--white-color)]"
        >
          <span>PSE</span>
          <Image src={iconPSE} alt="Icono de pse" />
        </div>
      </h2>
      <article className="grid my-4 gap-y-5">
        <ul className="w-max list-disc justify-self-center">
          <li className="text-small font-normal">Pago único</li>
          <li className="text-small font-normal">Sin renovación automática</li>
        </ul>
        <form className="px-4 grid gap-y-6" onSubmit={handlerSubmit}>
          <div className="flex h-10 w-80 items-center justify-between bg-[var(--dark-red)] text-[--white-color] text-base px-4 py-2">
            <span>Total: </span>
            <span> {getBargain()}</span>
          </div>
          <div className="text-xs text-center font-light">
            Al hacer clic en "PAGAR" estás aceptando los
            <br />
            <span className="ml-2 text-[var(--light-blue)] underline">
              {" "}
              Términos y Condiciones{" "}
            </span>
            de la Promoción.
          </div>
          <button
            type="submit"
            className={`justify-self-center w-60 h-14 p-2 rounded-[28px] font-bold bg-[var(--orange-color)] text-white`}
          >
            Continuar
          </button>
        </form>
      </article>
    </section>
  );
};

export default PMpse;
