const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());

app.post("/log", (req, res) => {
    console.log("Sidecar Log:", req.body.message);
    res.sendStatus(200);
});

app.listen(PORT, () =>
{
    console.log(`Sidecar service running on port ${PORT}`);
});
