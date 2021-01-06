const db = require("../models")


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
}

