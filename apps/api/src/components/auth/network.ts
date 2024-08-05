const express = require("express");
const response = require("../../tools/network/response");

const controller = require("./index");
const router = express.Router();

router.post("/send-pin/email", sendVerificationPinEmail);
router.post("/send-pin/phone", sendVerificationPinPhone);
router.post("/verification-pin/email", verificationPinEmail);
router.post("/verification-pin/phone", verificationPinPhone);

function sendVerificationPinEmail(req: any, res: any, next: any) {
  controller
    .sendVerificationPinEmail(req.body)
    .then(() => {
      response.success(
        req,
        res,
        "Se envio el pin de verificación al correo",
        200
      );
    })
    .catch(next);
}

function sendVerificationPinPhone(req: any, res: any, next: any) {
  controller
    .sendVerificationPinPhone(req.body)
    .then(() => {
      response.success(
        req,
        res,
        "Se envio el pin de verificación celular",
        200
      );
    })
    .catch(next);
}

function verificationPinEmail(req: any, res: any, next: any) {
  controller
    .verificationPinEmail(req.body)
    .then((token: string) => {
      response.success(req, res, token, 200);
    })
    .catch(next);
}

function verificationPinPhone(req: any, res: any, next: any) {
  controller
    .verificationPinPhone(req.body)
    .then((token: string) => {
      response.success(req, res, token, 200);
    })
    .catch(next);
}

export = router;
