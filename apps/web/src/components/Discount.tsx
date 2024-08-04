import React, { useContext } from "react";
import AppContext from "@context/AppContext";

const Discount = () => {
  const { user, getPrice, getBargain } = useContext(AppContext);

  return (
    <article className="flex flex-col h-main text-white items-center justify-center gap-y-10">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h3 className="flex items-center justify-center h-16 py-2 px-3.5 bg-[var(--red-color)] text-5xl font-bold text-[var(--yellow-color)]">
          ¡FELICITACIONES!
        </h3>
        <h3 className="flex items-center justify-center h-18 font-bold text-[var(--white-colo)] text-6xl custom-text-shadow">
          {user.name.split(" ")[0]}
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4">
        <p className="font-bold text-3xl text-center custom-text-shadow">
          tienes un{" "}
          <span className="text-[var(--yellow-color)] text-5xl">${user.discount}%</span> de
          descuento <br /> en la compra de tu
        </p>
        <p className="text-center custom-font text-[var(--yellow-color)] text-5xl font-extrabold rotate-[-4deg] custom-text-shadow">
          SUSCRIPCIÓN <br />
          <span className="text-6xl">ANUAL</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold custom-text-shadow">
          Tu precio es:{" "}
          <span className="text-6xl text-[var(--yellow-color)]">
            {getBargain()}
          </span>
        </p>
        <p className="text-3xl font-bold opacity-80 custom-text-shadow">
          en vez de:{" "}
          <span className="text-[var(--yellow-color)] line-through decoration-[var(--red-color)]">
            {getPrice()}
          </span>
        </p>
      </div>
    </article>
  );
};

export default Discount;
