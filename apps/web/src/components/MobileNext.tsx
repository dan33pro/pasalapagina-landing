import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext';

import Dropdown from '@components/Dropdown';

const MobileNext = () => {
    const { state, selectedCountry, phone, setPhone, dob, setDob, termsAccepted, setTermsAccepted } = useContext(AppContext);

    const handlerSubmit = (event) => {
        event.preventDefault();
        console.log(selectedCountry.code, phone, dob);
        if (state.isRegisterPhone) {
            console.log('Regsitrar bb');
            return;
        }
        if (state.isLoginPhone) {
            console.log('Iniciar Sesion bb');
            return;
        }
    }

  return (
    <article>
        <p className="py-5 text-center text-lg font-medium">
            Ingresa tus datos para
            <span>{state.isRegisterPhone ? ' registrar' : ' iniciar sesión'}</span>
        </p>
        <form className="p-4 grid gap-y-4" onSubmit={handlerSubmit}>
            <div className="grid grid-cols-[auto,1fr] gap-x-4">
                <Dropdown />
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Número de celular"
                    className="flex items-center justify-between h-12 px-4 py-2 text-sm
                            font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                            border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                            focus:outline-none placeholder:font-normal" />
            </div>

            <input
                type="date"
                placeholder="Fecha de nacimiento DD/MM/AAAA"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="flex items-center justify-between w-[370px] h-12 px-4 py-2 text-sm
                        font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                        border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                        focus:outline-none placeholder:font-normal" />

            <label className="flex items-center justify-center my-4 text-[var(--dark-grey)]">
                <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mr-2"/>
                Acepto los términos y condiciones
            </label>

            <button
                type="submit"
                disabled={(!termsAccepted || phone.length < 1 || dob.length < 1)} 
                className={`justify-self-center w-60 h-14 p-2 rounded-[28px] font-bold ${
                    (termsAccepted && phone.length > 0 && dob.length > 0) ?
                        'bg-[var(--orange-color)] text-white' :
                        'bg-[var(--bg-tr-btn)] text-[var(--bg-tr-tx-btn)]'
                    }`} >
                    Continuar
            </button>
        </form>
    </article>
  );
};

export default MobileNext;