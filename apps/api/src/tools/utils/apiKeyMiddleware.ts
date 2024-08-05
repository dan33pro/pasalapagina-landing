const config = require("../../../config");
const error = require("./error");

const apikeyMiddleware = (req: any, res: any, next: any) => {
  const providedApiKey = req.headers["x-api-key"];

  if (!(providedApiKey && providedApiKey === config.api.key)) {
    throw new error("Unauthorized", 401);
  }

  next();
};

export = apikeyMiddleware;
