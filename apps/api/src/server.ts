import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";

const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");

const apikeyMiddleware = require("./tools/utils/apiKeyMiddleware");
const errors = require("./tools/network/errors");

export const createServer = (): Express => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
    .use(apikeyMiddleware)
    .use(errors)
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  return app;
};
