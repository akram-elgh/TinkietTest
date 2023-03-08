const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
// Specify the directory where uploaded files will be stored
const upload = multer({ dest: "uploads/" });
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(express.static("./candidates"));

// variable to keep track of candidates number
let candidateCount = 0;

// Exposing the candidate route and set the informations about the candidates
app.get("/candidate", (req, res) => {
  let candidates = [];
  for (let i = 0; i < candidateCount; i++) {
    candidates.push(
      JSON.parse(fs.readFileSync(`./candidates/candidate${i}.json`, "utf8"))
    );
  }
  console.log(candidates);
  res.json(candidates);
});

// The post route fetch data from the frontend and add them to the array of candidates
app.post("/api", (req, res) => {
  // Writing informations about each candidate in a separate json file in the candidates directory
  fs.writeFile(
    `candidates/candidate${candidateCount++}.json`,
    JSON.stringify(req.body),
    (err) => {
      err && console.log(err);
    }
  );
  res.sendStatus(200);
});

// Storing the cv in the uploads directory
app.post("/api/uploads", upload.single("file"), (req, res) => {
  res.sendStatus(200);
});

app.listen(3001, (err) => console.log(err || "Listening on port 3001"));
