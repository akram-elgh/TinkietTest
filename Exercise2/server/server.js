const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

const candidates = [];
app
  .route("/api")
  // The get route send data as json response
  .get((req, res) => {
    res.json(candidates);
  })
  // The post route fetch data from the frontend and add them to the array of candidates
  .post((req, res) => {
    candidates.push(req.body);
    res.sendStatus(200);
  });

app.listen(3001, (err) => console.log(err || "Listening on port 3000"));
