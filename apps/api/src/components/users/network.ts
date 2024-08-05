const express = require("express");
const response = require("../../tools/network/response");

const controller = require("./index");
const router = express.Router();

router.get("/email/:email", getUserEmail);
router.get("/countryCode/:countryCode/phone/:phone", getUserPhone);
router.get("/is-there/email/:email", isThereUserEmail);
router.get("/is-there/countryCode/:countryCode/phone/:phone", isThereUserPhone);
router.post("/email", registerUserEmail);
router.post("/phone", registerUserPhone);

async function getUserEmail(req: any, res: any) {
  try {
    const { email } = req.params;
    const data = await controller.getUserEmail(email);
    response.success(req, res, data, 200);
  } catch (error: any) {
    response.error(req, res, error.message, error.statusCode);
  }
}

async function getUserPhone(req: any, res: any) {
  try {
    const { countryCode, phone } = req.params;
    const data = await controller.getUserPhone(countryCode, phone);
    response.success(req, res, data, 200);
  } catch (error: any) {
    response.error(req, res, error.message, 500);
  }
}

async function isThereUserEmail(req: any, res: any, next: any) {
  try {
    const { email } = req.params;
    const data = await controller.isThereUserEmail(email);
    response.success(req, res, data, 200);
  } catch (error: any) {
    response.error(req, res, error.message, 500);
  }
}

async function isThereUserPhone(req: any, res: any, next: any) {
  try {
    const { countryCode, phone } = req.params;
    const data = await controller.isThereUserPhone(countryCode, phone);
    response.success(req, res, data, 200);
  } catch (error: any) {
    response.error(req, res, error.message, 500);
  }
}

async function registerUserEmail(req: any, res: any, next: any) {
  try {
    const data = await controller.registerUserEmail(req.body);
    response.success(req, res, data, 201);
  } catch (error: any) {
    response.error(req, res, error.message, 500);
  }
}

async function registerUserPhone(req: any, res: any, next: any) {
  try {
    const data = await controller.registerUserPhone(req.body);
    response.success(req, res, data, 201);
  } catch (error: any) {
    response.error(req, res, error.message, 500);
  }
}

export = router;
