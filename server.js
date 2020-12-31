require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors=require("cors");
const mongoose = require("mongoose");

const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)

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

//Stripe Integration
app.post('/payment',(req, res)=>{
  const body={
    source: req.body.token.id,
    amount: req.body.amount,
    currency:'usd'
  };
  stripe.charges.create(body, (stripeErr, stripeRes)=>{
    console.log(stripeErr)
    if(stripeErr){
        res.status(500).send({error: stripeErr})
    }else{
        res.status(200).send({success: stripeRes});
    }
  })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://kendayao:"+process.env.DB_PASS+"@swiftscluster.cudla.mongodb.net/swifts?retryWrites=true&w=majority" || "mongodb://localhost/swiftmessages", { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
