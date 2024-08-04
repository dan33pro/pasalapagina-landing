import {
    sendVerificationPinEmail,
    sendVerificationPinPhone,
    verificationPinEmail,
    verificationPinPhone
} from '@services/api/auth';

import {
    isThereUserEmail,
    isThereUserPhone,
    registerUserEmail,
    registerUserPhone
} from '@services/api/users';

const useAuth = () => {
    const processToSendPIN = async (state, email, phone, countryCode, fullName, dob) => {
        try {
            if ((email.length > 0 && state.isEmailConfirmation) || (phone.length > 0 && state.isPhoneConfirmation)) {
                let existUser;
                if (state.isEmailConfirmation) existUser = await isThereUserEmail(email);
                if (state.isPhoneConfirmation) existUser = await isThereUserPhone(countryCode, phone);
    
                if (existUser.error) {
                    console.log('Error al consultar el usuario');
                    return;
                }
    
                if (existUser.exist) {
                    sendPIN(state, email, countryCode, phone);
                } else {
                    let seRegistro;
                    if (state.isEmailConfirmation) seRegistro = await registerUserEmail(email, fullName, dob);
                    if (state.isPhoneConfirmation) existUser = await registerUserPhone(countryCode, phone, fullName, dob);
    
                if (!seRegistro.error) {
                    sendPIN(state, email, countryCode, phone);
                } else {
                    console.error('Error registrando el usuario');
                }
                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    const sendPIN = async (state, email, countryCode, phone): boolean => {
        try {
            let seEnvioPIN;
            if (state.isEmailConfirmation) seEnvioPIN = await sendVerificationPinEmail(email);
            if (state.isPhoneConfirmation) seEnvioPIN = await sendVerificationPinPhone(countryCode, phone);

            if (seEnvioPIN.error) {
                console.error('Error al enviar el PIN');
                return false;
            }

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const verificationPin = async (state, pin, email, countryCode, phone) => {
        try {
            let res;
            if (state.isEmailConfirmation) res = await verificationPinEmail(email, pin);
            if (state.isPhoneConfirmation) res = await verificationPinPhone(countryCode, phone, pin);

            return res;
        } catch (e) {
            console.error(e);
            return {error: true, e}
        }
    };

    return {
        processToSendPIN,
        verificationPin,
        sendPIN
    };
}

export default useAuth;