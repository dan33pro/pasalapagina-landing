const API = process.env.API_URL;
const VERSION = process.env.API_VERSION;

const endPoints = {
  users: {
    getUserEmail: (email: string) =>
      `${API}/api/${VERSION}/users/email/${email}`,
    getUserPhone: (countryCode: string, phone: string) =>
      `${API}/api/${VERSION}/users/countryCode/${countryCode}/phone/${phone}`,
    isThereUserEmail: (email: string) =>
      `${API}/api/${VERSION}/users/is-there/email/${email}`,
    isThereUserPhone: (countryCode: string, phone: string) =>
      `${API}/api/${VERSION}/users/is-there/countryCode/${countryCode}/phone/${phone}`,
    registerUserEmail: `${API}/api/${VERSION}/users/email/`,
    registerUserPhone: `${API}/api/${VERSION}/users/phone/`,
  },
  auth: {
    sendVerificationPinEmail: `${API}/api/${VERSION}/auth/send-pin/email/`,
    sendVerificationPinPhone: `${API}/api/${VERSION}/auth/send-pin/phone/`,
    verificationPinEmail: `${API}/api/${VERSION}/auth/verification-pin/email/`,
    verificationPinPhone: `${API}/api/${VERSION}/auth/verification-pin/phone/`,
  },
};

export default endPoints;
