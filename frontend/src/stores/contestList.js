import axios from "axios";

const API_URL = "https://bitwit.onrender.com/api";

export const leetcodeContests = async () => {
  try {
    const contests = await axios.get(`${API_URL}/leetcode-contest`);
    return contests;
  } catch (error) {
    return [];
  }
};

export const codeforcesContests = async () => {
  try {
    const response = await axios.get(`${API_URL}/codeforces-contest`);
    return response || [];
  } catch (error) {
    return [];
  }
};

export const codechefContests = async () => {
  try {
    const response = await axios.get(`${API_URL}/codechef-contest`);

    return response.data || [];
  } catch (error) {
    return [];
  }
};

export const hackerrankContests = async () => {
  try {
    const response = await axios.get(`${API_URL}/hackerrank-contest`);

    return response.data ? response.data : [];
  } catch (error) {
    return [];
  }
};
