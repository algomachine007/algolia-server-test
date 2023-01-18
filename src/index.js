const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8081;

// middleware that processes json
app.use(bodyParser.json());

app.post("/a", (req, res) => {
  const { info } = req.body;
  res.status(200).send(info);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
