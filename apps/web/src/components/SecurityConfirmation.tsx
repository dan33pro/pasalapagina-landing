import React, {useState, useContext, useEffect} from 'react';
import AppContext from '@context/AppContext';

import useAuth from '@hooks/useAuth';
import useMasks from '@hooks/useMasks';
import useSessionStorage from '@hooks/useSessionStorage';

const SecurityConfirmation = () => {
    const { state, updateState, email, phone, selectedCountry, fullName, dob, stepsViews, setStepsViews } = useContext(AppContext);
    const { processToSendPIN, verificationPin, sendPIN } = useAuth();
    const { maskPhoneNumber, maskEmail } = useMasks();

    const [pinValues, setPinValues] = useState(['', '', '', '', '', '']);
    const [isDisableSubmit, setIsDisableSubmit] = useState<boolean>(true);

    const changeFocusPinInput = (index) => document.getElementById(`pin-input-${index}`).focus();

    const checkFocusPinInput = (index) => {
        if (index > 0 && pinValues[index - 1] === '' && pinValues[index] === '') {
            changeFocusPinInput(index - 1);
        }
    };

    const handlePinInput = async (index, value) => {
        if (index < 5 && pinValues[index] != '' && value != '') {
            changeFocusPinInput(index + 1);
            return;
        }
        if (index === 5 && pinValues[index] != '' && value != '') return;

        let newPinValues = [...pinValues];
        if (value.length > 1) {
            newPinValues = newPinValues.map((item, i) => value[i]);
            console.log(newPinValues);
            index = newPinValues.length - 2;
        } else {
            newPinValues[index] = value;
        }
        await setPinValues(newPinValues);

        if (value !== '' && index < 5) {
            changeFocusPinInput(index + 1);
        }
    };

    const checkPinValues = () => {
        return !pinValues.some((number) => isNaN(number) || number === '' || parseInt(number) < 0 || parseInt(number) > 9);
    };

    const handlerSubmit = async (evt) => {
        evt.preventDefault();
        if (!checkPinValues()) {
          console.error('Pin no válido');
          return;
        }

        const pin = parseInt(pinValues.join(''));
        // const res = await verificationPin(state, pin, email, selectedCountry.code, phone);
        // if (res.error || !res) {
        //   console.error('Error al verificar el PIN');
        //   return;
        // }
    
        // useSessionStorage.saveEmail(email);
        // useSessionStorage.savePhone(phone, selectedCountry.code);
        // useSessionStorage.saveFullName(fullName);
        // useSessionStorage.saveDOB(dob);
        // useSessionStorage.saveToken(res.message);

        if(state.isPhoneConfirmation) setStepsViews([...stepsViews, 'isPhoneConfirmation']);
        if(state.isEmailConfirmation) setStepsViews([...stepsViews, 'isEmailConfirmation']);
        updateState('isPaymentMethod');
    };

    useEffect(() => {
        setIsDisableSubmit(!checkPinValues());
    }, [pinValues]);

  return (
    <section className="h-main flex items-center justify-center flex-col">
        <h2 className=" text-2xl text-center text-[var(--dark-grey)] pt-3.5 px-7 pb-7
                        border-b border-[var(--border-color)]">
          Confirmación de seguridad
        </h2>
        <article>
            <div>
                <p className="py-5 text-center text-lg font-medium text-[var(--dark-grey)]">
                    Hemos enviado un código de 6<br/>dígitos al
                    <span>{state.isEmailConfirmation ? ' correo electrónico:' : ' número de teléfono:'}</span>
                </p>
                <p className="pb-5 text-center text-2xl font-normal text-[var(--dark-grey)]">
                    {state.isEmailConfirmation ? maskEmail(email) : maskPhoneNumber(phone)}
                </p>
            </div>
            <form className="p-4 grid gap-y-9" onSubmit={handlerSubmit}>
                <div className="flex gap-x-4">
                    {pinValues.map((value, index) => (
                        <input
                            type="number"
                            key={'k-' + index}
                            id={`pin-input-${index}`}
                            value={value}
                            onChange={(e) => handlePinInput(index, e.target.value)}
                            onFocus={(e) => checkFocusPinInput(index)}
                            className="no-spin flex items-center justify-center w-12 h-12 text-sm text-center
                                    font-medium text-[var(--dark-grey)] bg-[var(--ul-light-gray)] border
                                    border-[var(--grey)] shadow-[var(--light-blue)] shadow-custom
                                    focus:outline-none" />
                    ))}
                </div>
                <button
                    onClick={() => processToSendPIN(state, email, phone, selectedCountry.code, fullName, dob)}
                    className="text-lg font-normal" >
                        ¿Aún no recibiste el código?
                    <span className="ml-2 text-[var(--light-blue)] underline">Reenviar código</span>
                </button>
                
                <button
                    type="submit"
                    disabled={isDisableSubmit} 
                    className={`justify-self-center w-60 h-14 p-2 rounded-[28px] font-bold ${(!isDisableSubmit) ?
                            'bg-[var(--orange-color)] text-white' :
                            'bg-[var(--bg-tr-btn)] text-[var(--bg-tr-tx-btn)]'
                        }`} >
                        Continuar
                </button>
            </form>
        </article>
    </section>
  );
};

export default SecurityConfirmation;