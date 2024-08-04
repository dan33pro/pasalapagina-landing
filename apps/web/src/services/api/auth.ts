import axios from "axios";
import endPoints from "@services/api";

const API_KEY = process.env.API_KEY;
const config = {
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    "x-api-key": `${API_KEY}`,
  },
};

const sendVerificationPinEmail = async (body: { email: string }) => {
  let response;
  try {
    const response = await axios.post(
      endPoints.auth.sendVerificationPinEmail,
      body,
      config
    );
    return { error: false, data: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, data: e, status: response?.status };
  }
};

const sendVerificationPinPhone = async (body: {
  countryCode: string;
  phone: string;
}) => {
  let response;
  try {
    const response = await axios.post(
      endPoints.auth.sendVerificationPinPhone,
      body,
      config
    );
    return { error: false, data: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, data: e, status: response?.status };
  }
};

const verificationPinEmail = async (body: { email: string; pin: string }) => {
  let response;
  try {
    const response = await axios.post(
      endPoints.auth.verificationPinEmail,
      body,
      config
    );
    return { error: false, data: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, data: e, status: response?.status };
  }
};

const verificationPinPhone = async (body: {
  countryCode: string;
  phone: string;
  pin: string;
}) => {
  let response;
  try {
    const response = await axios.post(
      endPoints.auth.verificationPinPhone,
      body,
      config
    );
    return { error: false, data: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, data: e, status: response?.status };
  }
};

export {
  sendVerificationPinEmail,
  sendVerificationPinPhone,
  verificationPinEmail,
  verificationPinPhone,
};
