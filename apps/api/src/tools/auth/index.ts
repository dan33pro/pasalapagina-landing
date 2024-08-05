const jwt = require("jsonwebtoken");
const config = require("../../../config");
const error = require("../utils/error");
const secret = config.jwt.secret;

function sign(data: any) {
  return jwt.sign(data, secret);
}

function getToken(auth: any) {
  if (!auth) {
    throw error("No viene Token", 401);
  }
  if (auth.indexOf("Bearer ") === -1) {
    throw error("Formato invalido", 401);
  }

  let token = auth.replace("Bearer ", "");
  return token;
}

function verify(token: string) {
  return jwt.verify(token, secret);
}

function decodeHeader(req: any) {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
}

const check = {
  own: function (req: any, owner: string) {
    const decoded = decodeHeader(req);
    if (decoded.cedula != owner || !owner) {
      throw error("No puedes hacer esto", 403);
    }
  },
};

export = {
  sign,
  check,
};
