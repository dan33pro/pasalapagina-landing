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

const getUserEmail = async (email: string) => {
  let response;
  try {
    response = await axios.get(endPoints.users.getUserEmail(email), config);
    return { error: false, data: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, data: e, status: response?.status };
  }
};

const getUserPhone = async (countryCode: string, phone: string) => {
  let response;
  try {
    response = await axios.get(
      endPoints.users.getUserPhone(countryCode, phone),
      config
    );
    return { error: false, data: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, data: e, status: response?.status };
  }
};

const isThereUserEmail = async (email: string) => {
  let response;
  try {
    response = await axios.get(endPoints.users.isThereUserEmail(email), config);
    return { error: false, exist: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, exist: false, status: response?.status };
  }
};

const isThereUserPhone = async (countryCode: string, phone: string) => {
  let response;
  try {
    response = await axios.get(
      endPoints.users.isThereUserPhone(countryCode, phone),
      config
    );
    return { error: false, exist: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, exist: false, status: response?.status };
  }
};

const registerUserEmail = async (body: {
  email: string;
  fullName: string;
  dob: string;
}) => {
  let response;
  try {
    const response = await axios.post(
      endPoints.users.registerUserEmail,
      body,
      config
    );
    return { error: false, data: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, data: e, status: response?.status };
  }
};

const registerUserPhone = async (body: {
  countryCode: string;
  phone: string;
  fullName: string;
  dob: string;
}) => {
  let response;
  try {
    const response = await axios.post(
      endPoints.users.registerUserPhone,
      body,
      config
    );
    return { error: false, data: response?.data, status: response?.status };
  } catch (e) {
    return { error: true, data: e, status: response?.status };
  }
};

export {
  getUserEmail,
  getUserPhone,
  isThereUserEmail,
  isThereUserPhone,
  registerUserEmail,
  registerUserPhone,
};
