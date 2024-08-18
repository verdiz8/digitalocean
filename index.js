import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

// Define a route for "/"
app.get("/", (req, res) => {
  res.send("Hello, Digital Ocean!");
});

// Start the server
app.listen(port, host, () => {
  console.log(`Server is running at ${host}:${port}`);
});
