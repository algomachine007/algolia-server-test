const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8081;

// middleware that processes json
app.use(bodyParser.json());

app.post("/a", (req, res) => {
  console.log("Req Object", req);

  const { info } = req.body;
  res.status(200).send(info);
});

app.post("/b", (req, res) => {
  console.log("Req Object", req);

  res.status(200).json(req.body);
});

app.get("/c", (req, res) => {
  res.status(200).send("Working");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
