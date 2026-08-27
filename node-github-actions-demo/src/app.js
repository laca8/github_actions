const express = require("express");
const dotenv = require('dotenv')
dotenv.config()
const app = express();

app.use(express.json());
const cors = require("cors");


const PORT = process.env.PORT || 3000;

const corsOrigins = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(",").map((origin) => origin.trim())
    : [];

app.use(
    cors({
        origin: corsOrigins,
    })
);
app.get("/", (req, res) => {
    res.json({
        message: "Hello from GitHub Actions",
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Node backend is running...",
    });
});

module.exports = app;