import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000"; // Flask backend

export const predictPower = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/predict-power`, data);
    return res.data.predictedPower;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getHealthStatus = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/health-status`, data);
    return res.data.health;
  } catch (err) {
    console.error(err);
    return "Error";
  }
};

export const getSuggestions = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/suggestions`, data);
    return res.data.suggestions;
  } catch (err) {
    console.error(err);
    return [];
  }
};
