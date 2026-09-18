const express = require("express");

const app = express();

app.use(express.json());

const port = 8081;

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});