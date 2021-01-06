const db = require("../models")
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY)


module.exports=function(app){
    app.post("/api/messages", function(req,res){
        db.Messages.create(req.body, function(err,data){
            if (err){
                console.log(err)
            }else{
                res.json(data)
            }
        })
    })
    app.get('/api/faqs', function(req, res){
        db.Faq.find({}).then(data=>res.json(data)).catch(err=>console.log(err))
    })
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
}

