import axios from "axios";

export const gfgPotd = async () => {
  try {
    const response = await axios.get(
      "https://bitwit.onrender.com/problems-contests/api/gfg-potd"
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const leetcodePotd = async () => {
  try {
    const response = await axios.get(
      "https://bitwit.onrender.com/problems-contests/leetcode-potd"
    );
    return response ? response.data : null;
  } catch (error) {
    return null;
  }
};
