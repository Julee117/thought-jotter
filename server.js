const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const noteRoutes = require('./routes/notes');
const userRoutes = require('./routes/users');
const twilioRoute = require('./routes/twilio');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PW;

mongoose.connect(`mongodb://${DB_USER}:${DB_PW}@ds263837.mlab.com:63837/app-db`, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB connected..`))
mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", noteRoutes);
app.use("/auth", userRoutes);
app.use("/", twilioRoute);

app.listen(port, () => console.log("App started on: " + port));
