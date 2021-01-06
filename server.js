require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors=require("cors");
const mongoose = require("mongoose");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require('./routes/apiRoutes.js')(app)


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://kendayao:"+process.env.DB_PASS+"@swiftscluster.cudla.mongodb.net/swifts?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
