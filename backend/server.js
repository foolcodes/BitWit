import express from "express";
import axios from "axios";
import cors from "cors";
import path from "path";

const app = express();
const _dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(_dirname, "/frontend/dist")));
const PORT = 5000;

app.get("/api/strivers-list/a-to-z", async (req, res) => {
  try {
    const response = await axios.get(
      "https://backend.takeuforward.org/api/sheets/double/strivers_a2z_sheet"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error while fetching data" });
  }
});

app.get("/api/strivers-list/sde-sheet", async (req, res) => {
  try {
    const response = await axios.get(
      "https://backend.takeuforward.org/api/sheets/single/strivers_sde_sheet"
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: "Error while fetching sde sheet" });
  }
});

app.get("/api/strivers-list/79-sheet", async (req, res) => {
  try {
    const response = await axios.get(
      "https://backend.takeuforward.org/api/sheets/single/strivers_79_sheet"
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: "Error while fetching sde sheet" });
  }
});

app.get("/api/strivers-list/blind-75", async (req, res) => {
  try {
    const response = await axios.get(
      "https://backend.takeuforward.org/api/sheets/single/blind_75"
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: "Error while fetching sde sheet" });
  }
});

app.get("/api/tle-sheet", async (req, res) => {
  try {
    const response = await axios.get(
      "https://backend-prod-v2-xzavj.ondigitalocean.app/public/cp-sheet/no-auth-fetch-problems"
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: "Error while fetching tle sheet" });
  }
});

app.get("/api/gfg-contest", async (req, res) => {
  try {
    const { page_number = 1, sub_type = "all", type = "contest" } = req.query;

    const response = await axios.get(
      "https://practiceapi.geeksforgeeks.org/api/vr/events/",
      {
        params: { page_number, sub_type, type },
        headers: {
          "User-Agent": "Mozilla/5.0",
          Origin: "https://www.geeksforgeeks.org",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: "Error fetching GFG contests" });
  }
});

app.get("/api/leetcode-contest", async (req, res) => {
  try {
    const graphqlQuery = {
      query: `
        query getContestList {
          allContests {
            title
            startTime
            duration
            titleSlug
          }
        }
      `,
    };

    const response = await axios.post(
      "https://leetcode.com/graphql",
      graphqlQuery,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const allContests = response.data.data.allContests;
    const now = Date.now();

    const activeContests = allContests
      .filter((contest) => contest.startTime * 1000 > now)
      .map((contest) => ({
        platform: "LeetCode",
        name: contest.title,
        startTimeUnix: contest.startTime,
        startTime: new Date(contest.startTime * 1000).toISOString(),
        durationSeconds: contest.duration,
        duration: `${Math.floor(contest.duration / 3600)} hours ${
          (contest.duration % 3600) / 60
        } minutes`,
        url: `https://leetcode.com/contest/${contest.titleSlug}`,
      }));
    res.json(activeContests);
  } catch (error) {
    res.status(400).json(error || "Error while fetching leetcode contests");
  }
});

app.get("/api/codeforces-contest", async (req, res) => {
  try {
    const response = await axios.get("https://codeforces.com/api/contest.list");
    if (!response)
      res.status(400).json("Error while fetching codeforces contests!");

    // filtering active contests
    const activeContests = response.data.result.filter(
      (eachContest) => eachContest.phase === "BEFORE"
    );
    res.json(activeContests);
  } catch (error) {
    res.status(400).json(`${error} while fetching codeforces contests`);
  }
});

app.get("/api/codechef-contest", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.codechef.com/api/list/contests/all"
    );
    if (!response) res.status(400).json("Error while fetching response!");

    res.json(response.data);
  } catch (error) {
    res.status(400).json(error || "Error while fetching codechef-contest");
  }
});

app.get("/api/leetcode-potd", async (req, res) => {
  try {
    const query = `
        query questionOfToday {
          activeDailyCodingChallengeQuestion {
            date
            userStatus
            link
            question {
              titleSlug
              title
              translatedTitle
              acRate
              difficulty
              freqBar
              frontendQuestionId: questionFrontendId
              isFavor
              paidOnly: isPaidOnly
              status
              hasVideoSolution
              hasSolution
              topicTags {
                name
                id
                slug
              }
            }
          }
        }
      `;

    const response = await axios.post(
      "https://leetcode.com/graphql/",
      {
        operationName: "questionOfToday",
        query: query,
        variables: {},
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/api/gfg-potd", async (req, res) => {
  try {
    const response = await axios.get(
      "https://practiceapi.geeksforgeeks.org/api/vr/problems-of-day/problem/today/"
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/api/hackerrank-contest", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.hackerrank.com/community/engage/events",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
          Accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": "application/json",
          Referer: "https://www.hackerrank.com/contests",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.use("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT);
