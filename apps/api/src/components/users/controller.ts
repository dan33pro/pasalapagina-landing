const tabla = "User";

export = function (injectedStore: any) {
  let store = injectedStore;
  if (!store) {
    store = require("../../tools/store/Keysely");
  }

  async function getUserEmail(email: string) {
    const res = await store.query(tabla, { email });
    return res;
  }

  async function getUserPhone(countryCode: string, phone: string) {
    const res = await store.query(tabla, { phone });
    return res.filter((user: any) => user.countryCode == countryCode);
  }

  async function isThereUserEmail(email: string) {
    const res = await store.query(tabla, { email });
    return res.length > 0;
  }

  async function isThereUserPhone(countryCode: string, phone: string) {
    const res = await store.query(tabla, { phone });
    const withCode = res.filter((user: any) => user.countryCode == countryCode);
    return withCode.length > 0;
  }

  async function registerUserEmail(body: any) {
    const user = {
      name: body.name,
      email: body.email,
      dateOfBirthDay: body.dateOfBirthDay,
    };
    if (
      typeof user.email != "string" ||
      typeof user.name != "string" ||
      typeof user.dateOfBirthDay != "string"
    ) {
      return Promise.reject("No se indico la información necesaria");
    }

    const response = await store.insert(tabla, user);
    return response;
  }

  async function registerUserPhone(body: any) {
    const user = {
      name: body.name,
      countryCode: body.countryCode,
      phone: body.phone,
      dateOfBirthDay: body.dateOfBirthDay,
    };
    if (
      typeof user.countryCode != "string" ||
      typeof user.phone != "string" ||
      typeof user.name != "string" ||
      typeof user.dateOfBirthDay != "string"
    ) {
      return Promise.reject("No se indico la información necesaria");
    }

    const response = await store.insert(tabla, user);
    return response;
  }

  return {
    getUserEmail,
    getUserPhone,
    isThereUserEmail,
    isThereUserPhone,
    registerUserEmail,
    registerUserPhone,
  };
};
