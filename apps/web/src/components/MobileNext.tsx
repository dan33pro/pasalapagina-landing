import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext';

import Dropdown from '@common/Dropdown';

const MobileNext = () => {
    const {
        state, selectedCountry, phone, setPhone, dob,
        setDob, termsAccepted, setTermsAccepted, fullName,
        setFullName, updateState, stepsViews, setStepsViews
    } = useContext(AppContext);

    const handlerSubmit = (event) => {
        event.preventDefault();
        if (state.isRegisterPhone) {
            updateState('isPhoneConfirmation');
            setStepsViews([ ...stepsViews, 'isRegisterPhone']);
            return;
        }
        if (state.isLoginPhone) {
            updateState('isPhoneConfirmation');
            setStepsViews([ ...stepsViews, 'isLoginPhone']);
            return;
        }
    }

  return (
    <article className="MobileNext">
        <p className="py-5 text-center text-lg font-medium">
            Ingresa tus datos para
            <span>{state.isRegisterPhone ? ' registrarte' : ' iniciar sesión'}</span>
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
            {state.isRegisterPhone && (
                <input
                type="text"
                placeholder="Nombre y Apellido"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="flex items-center justify-between w-[370px] h-12 px-4 py-2 text-sm
                        font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                        border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                        focus:outline-none placeholder:font-normal" />
            )}
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
                disabled={(
                    state.isLoginPhone  && (!termsAccepted || phone.length < 1 || dob.length < 1) ||
                    state.isRegisterPhone  && (!termsAccepted || phone.length < 1 || dob.length < 1 || fullName.length < 1)
                )} 
                className={`justify-self-center w-60 h-14 p-2 rounded-[28px] font-bold ${(
                        state.isLoginPhone  && (termsAccepted && phone.length > 0 && dob.length > 0) ||
                        state.isRegisterPhone  && (termsAccepted && phone.length > 0 && dob.length > 0 && fullName.length > 0)
                    ) ?
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