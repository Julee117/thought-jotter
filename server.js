const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/notedb");
mongoose.Promise = global.Promise;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api", routes);

app.listen(port, () => console.log("talk-to-notepad app started on: " + port));
