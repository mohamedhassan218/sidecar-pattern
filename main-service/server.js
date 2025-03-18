const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
    // Send log to sidecar
    await axios.post("http://sidecar:4000/log", { message: "Request received at main service" });

    res.send("Hello, World!");
});

app.listen(PORT, () =>
{
    console.log(`Main service running on port ${PORT}`);
});
