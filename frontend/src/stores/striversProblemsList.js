import axios from "axios";

const API_URL = "http://localhost:5000/api/strivers-list";

export const striversAtoZSheet = async () => {
  try {
    const response = await axios.get(`${API_URL}/a-to-z`);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const striversSdeSheet = async () => {
  try {
    const response = await axios.get(`${API_URL}/sde-sheet`);
  } catch (error) {
    console.log(error || "Error fetching sde sheet");
  }
};

export const strivers79Sheet = async () => {
  try {
    const response = await axios.get(`${API_URL}/79-sheet`);
    console.log(response);
  } catch (error) {
    console.log(error || "Error fetching 79 sheet");
  }
};

export const striversBlind75 = async () => {
  try {
    const response = await axios.get(`${API_URL}/bind-75`);
  } catch (error) {
    console.log(error || "Error fetching blind 75 sheet");
  }
};

export const tleSheet = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/tle-sheet");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
