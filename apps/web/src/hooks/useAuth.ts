import {
  sendVerificationPinEmail,
  sendVerificationPinPhone,
  verificationPinEmail,
  verificationPinPhone,
} from "@services/api/auth";

import {
  isThereUserEmail,
  isThereUserPhone,
  registerUserEmail,
  registerUserPhone,
} from "@services/api/users";

import { Views } from "@models/viewsModel";

const useAuth = () => {
  const processToSendPIN = async (
    state: Views,
    email: string,
    phone: string,
    countryCode: string,
    fullName: string,
    dob: string
  ) => {
    try {
      if (
        (email.length > 0 && state.isEmailConfirmation) ||
        (phone.length > 0 && state.isPhoneConfirmation)
      ) {
        let existUser;
        if (state.isEmailConfirmation)
          existUser = await isThereUserEmail(email);
        if (state.isPhoneConfirmation)
          existUser = await isThereUserPhone(countryCode, phone);

        if (existUser == undefined || existUser.error) {
          console.log("Error al consultar el usuario");
          return;
        }

        if (existUser.exist) {
          sendPIN(state, email, countryCode, phone);
        } else {
          let seRegistro;
          if (state.isEmailConfirmation)
            seRegistro = await registerUserEmail({ email, fullName, dob });
          if (state.isPhoneConfirmation)
            existUser = await registerUserPhone({
              countryCode,
              phone,
              fullName,
              dob,
            });

          if (seRegistro != undefined && seRegistro.error) {
            sendPIN(state, email, countryCode, phone);
          } else {
            console.error("Error registrando el usuario");
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sendPIN = async (
    state: Views,
    email: string,
    countryCode: string,
    phone: string
  ) => {
    try {
      let seEnvioPIN;
      if (state.isEmailConfirmation)
        seEnvioPIN = await sendVerificationPinEmail({ email });
      if (state.isPhoneConfirmation)
        seEnvioPIN = await sendVerificationPinPhone({ countryCode, phone });

      if (seEnvioPIN == undefined || seEnvioPIN.error) {
        console.error("Error al enviar el PIN");
        return false;
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const verificationPin = async (
    state: Views,
    pin: string,
    email: string,
    countryCode: string,
    phone: string
  ) => {
    try {
      let res;
      if (state.isEmailConfirmation)
        res = await verificationPinEmail({ email, pin });
      if (state.isPhoneConfirmation)
        res = await verificationPinPhone({ countryCode, phone, pin });

      return { error: false, data: res };
    } catch (e) {
      console.error(e);
      return { error: true, data: e };
    }
  };

  return {
    processToSendPIN,
    verificationPin,
    sendPIN,
  };
};

export default useAuth;
