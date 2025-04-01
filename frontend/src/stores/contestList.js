import axios from "axios";

export const leetcodeContests = async () => {
  try {
    const contests = await axios.get(
      "http://localhost:5000/api/leetcode-contest"
    );
    return contests;
  } catch (error) {
    return [];
  }
};

export const codeforcesContests = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/codeforces-contest"
    );
    return response || [];
  } catch (error) {
    return [];
  }
};

export const codechefContests = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/codechef-contest"
    );
    return response.data || [];
  } catch (error) {
    return [];
  }
};
