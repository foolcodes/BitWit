import axios from "axios";

export const gfgPotd = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/gfg-potd");
    return response.data;
  } catch (error) {
    return null;
  }
};

export const leetcodePotd = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/leetcode-potd");
    return response ? response.data : null;
  } catch (error) {
    return null;
  }
};
