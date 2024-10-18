import express from "express";
import cors from "cors";
import path from "path";
import fetch from "node-fetch";

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(cors());

app.get("/on1", async (req, res) => {
  try {
    const fetchResponse = await fetch("http://192.168.189.52:80/on1");
    if (fetchResponse.ok) {
      res.status(200).json({ message: "LED 1 is on" });
    } else {
      res
        .status(fetchResponse.status)
        .json({ message: "Failed to turn on LED 1" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/off1", async (req, res) => {
  try {
    const fetchResponse = await fetch("http://192.168.189.52:80/off1");
    if (fetchResponse.ok) {
      res.status(200).json({ message: "LED 1 is off" });
    } else {
      res
        .status(fetchResponse.status)
        .json({ message: "Failed to turn off LED 1" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/on2", async (req, res) => {
  try {
    const fetchResponse = await fetch("http://192.168.189.52:80/on2");
    if (fetchResponse.ok) {
      res.status(200).json({ message: "LED 2 is on" });
    } else {
      res
        .status(fetchResponse.status)
        .json({ message: "Failed to turn on LED 2" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/off2", async (req, res) => {
  try {
    const fetchResponse = await fetch("http://192.168.189.52:80/off2");
    if (fetchResponse.ok) {
      res.status(200).json({ message: "LED 2 is off" });
    } else {
      res
        .status(fetchResponse.status)
        .json({ message: "Failed to turn off LED 2" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://127.0.0.1:5000");
});
