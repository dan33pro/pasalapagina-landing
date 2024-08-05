const auth = require("../../tools/auth");

export = function checkAuth(action: string) {
  function middlewware(req: any, res: any, next: any) {
    switch (action) {
      case "update":
        let ownerU = req.body.cedula;
        auth.check.own(req, ownerU);
        next();
        break;
      case "remove":
        let ownerR = req.params.id;
        auth.check.own(req, ownerR);
        next();
        break;
      default:
        next();
    }
  }

  return middlewware;
};
