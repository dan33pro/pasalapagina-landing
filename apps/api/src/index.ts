import { createServer } from "./server";
import { log } from "@repo/logger";

const config = require("../config");
const server = createServer();

const users = require("./components/users/network.js");
const auth = require("./components/auth/network.js");

server.use("/api/v1/users", users);
server.use("/api/v1/auth", auth);

const port = config.api.port;
server.listen(port, () => {
  log(`Api escuchando en el puerto ${port}`);
});
