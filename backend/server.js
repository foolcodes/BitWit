import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => console.log("Server listening on port 5000"));
