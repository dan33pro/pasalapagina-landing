import React from "react";
import Image from "next/image";

import iconCards from "@icons/icon-cards.svg";
import CardPayForm from "@components/CardPayForm";

const PMCard = () => {
  return (
    <div className="h-main flex items-center justify-center ">
      <section className="grid grid-rows-[auto,1fr] grid-cols-1">
        <h2
          className=" w-max grid grid-rows-1 text-2xl text-center text-[var(--ul-dark-grey)] py-3.5 px-7
                        border-b border-[var(--border-color)]"
        >
          <span>Agrega los datos de tu tarjeta</span>
        </h2>
        <article className="grid my-4 gap-y-5 h-min">
          <div
            className="flex items-center justify-between h-6 px-1 py-2 text-sm
                          font-medium text-[var(--ul-dark-grey)] bg-[var(--white-color)]"
          >
            <span>TARJETA DE CRÉDITO / DÉBITO</span>
            <Image src={iconCards} alt="Icono de pse" />
          </div>
          <ul className="px-6 w-max list-disc text-[var(--dark-grey)]">
            <li className="text-small font-normal">
              Plan con renovación automática anual
            </li>
            <li className="text-small font-normal">
              Sin cláusula de permanencia
            </li>
          </ul>
          <CardPayForm />
        </article>
      </section>
    </div>
  );
};

export default PMCard;
