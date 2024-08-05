import React, { useState, useContext, useEffect } from "react";
import AppContext from "@context/AppContext";

const CardPayForm = () => {
  const { getBargain } = useContext(AppContext);
  const [isDisableSubmit, setIsDisableSubmit] = useState(true);

  const [titular, setTitular] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [cuotas, setCuotas] = useState<string>("");
  const [expiracion, setExpiracion] = useState<string>("");
  const [cvv, setCVV] = useState<string>("");
  const [cc, setCC] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handlerSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (
      titular.length > 0 &&
      !isNaN(Number(numero)) &&
      numero.trim() !== "" &&
      !isNaN(Number(cuotas)) &&
      cuotas.trim() !== "" &&
      expiracion.length > 0 &&
      !isNaN(Number(cvv)) &&
      cvv.trim() !== "" &&
      Number(cvv) > 100 &&
      Number(cvv) < 1000 &&
      !isNaN(Number(cc)) &&
      cc.trim() !== "" &&
      !isNaN(Number(phone)) &&
      phone.trim() !== "" &&
      country.length > 0 &&
      department.length > 0 &&
      city.length > 0 &&
      address.length > 0
    ) {
      setIsDisableSubmit(false);
    } else {
      setIsDisableSubmit(true);
    }
  }, [
    titular,
    numero,
    cuotas,
    expiracion,
    cvv,
    cc,
    phone,
    country,
    department,
    city,
    address,
  ]);

  return (
    <form
      className="max-w-[414px] px-4 grid gap-y-4 h-min"
      onSubmit={handlerSubmit}
    >
      <div className="grid grid-rows-5 gird-cols-1 gap-y-4">
        <div className="grid grid-cols-2 grid-rows-1 gap-x-6">
          <input
            type="text"
            placeholder="Titular de la tarjeta"
            value={titular}
            onChange={(e) => setTitular(e.target.value)}
            className="flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
          <input
            type="text"
            placeholder="# de la tarjeta"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className="flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-x-6">
          <input
            type="text"
            placeholder="# de cuotas"
            value={cuotas}
            onChange={(e) => setCuotas(e.target.value)}
            className="flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
          <input
            type="text"
            placeholder="MM / AA"
            value={expiracion}
            onChange={(e) => setExpiracion(e.target.value)}
            className="flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            className="flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-x-6">
          <input
            type="text"
            placeholder="Documento de identificación"
            value={cc}
            onChange={(e) => setCC(e.target.value)}
            className="col-span-2 flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-x-6">
          <input
            type="text"
            placeholder="País"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
          <input
            type="text"
            placeholder="Departamento"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
          <input
            type="text"
            placeholder="Ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex items-center justify-between h-8 px-2 py-1 text-xs
                              font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                              border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                              focus:outline-none placeholder:font-normal"
          />
        </div>
        <input
          type="text"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="flex items-center justify-between h-8 px-2 py-1 text-xs
                            font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                            border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                            focus:outline-none placeholder:font-normal"
        />
      </div>
      <div className="flex h-10 items-center justify-between bg-[var(--dark-red)] text-[--white-color] text-base px-4 py-2">
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
        disabled={isDisableSubmit}
        className={`justify-self-center w-60 h-14 p-2 rounded-[28px] font-bold ${
          !isDisableSubmit
            ? "bg-[var(--orange-color)] text-white"
            : "bg-[var(--bg-tr-btn)] text-[var(--bg-tr-tx-btn)]"
        }`}
      >
        Continuar
      </button>
    </form>
  );
};

export default CardPayForm;
