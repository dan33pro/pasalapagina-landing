require("dotenv").config();

module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
    key: process.env.API_KEY || "",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "",
  },
  sendMail: {
    mail: process.env.SEND_MAIL || "",
    password: process.env.APLICATION_PASSWORD,
  },
  front: {
    host: process.env.FRONT_HOST || "",
  },
};
