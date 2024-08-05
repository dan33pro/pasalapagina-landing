const auth = require("../../tools/auth/index");
const error = require("../../tools/utils/error");
const sendMail = require("../../tools/utils/mailMessage");

const tabla = "Auth";

export = function (injectedStore: any) {
  let store = injectedStore;
  if (!store) {
    store = require("../../tools/store/Keysely");
  }

  async function sendVerificationPinEmail(correoElectronico) {
    const TABLAUSERS = {
      name: "cd_users_lc.users_lc",
      pk: "mail",
    };
    const dataUser = await store.query(TABLAUSERS, {
      mail: correoElectronico,
    });

    let pin = Math.trunc(Math.random() * 9000) + 1000;
    dataUser.current_pin = pin;
    dataUser.pin_intents = 0;

    await store.upsert(TABLAUSERS, dataUser, "update");
    return await sendMail(dataUser.mail, dataUser.current_pin);
  }

  async function verificationPin(correoElectronico, pin) {
    const TABLAUSERS = {
      name: "cd_users_lc.users_lc",
      pk: "mail",
    };
    const dataUser = await store.query(TABLAUSERS, {
      mail: correoElectronico,
    });
    if (dataUser.pin_intents >= 3) {
      dataUser.current_pin = null;
      dataUser.pin_intents = 0;

      await store.upsert(TABLAUSERS, dataUser, "update");
      throw error("Se exedio el limite de intentos", 418);
    } else {
      dataUser.pin_intents = dataUser.pin_intents + 1;
      await store.upsert(TABLAUSERS, dataUser, "update");
    }
    if (dataUser.current_pin && pin && dataUser.current_pin == pin) {
      // Generar Token
      let token = auth.sign(dataUser);
      dataUser.current_pin = null;
      dataUser.pin_intents = 0;
      store.upsert(TABLAUSERS, dataUser, "update");
      return token;
    } else {
      throw error("Pin invalido", 418);
    }
  }

  return {
    sendVerificationPinEmail,
    verificationPin,
  };
};
