const response = require("./response");

function errors(err: any, req: any, res: any, next: any) {
  const message = err.message || "Error interno";
  const status = err.statusCode || 500;

  response.error(req, res, message, status);
}

export = errors;
