const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: String,
    email: String,
    message: String,
    date:{
        type: Date,
        default: Date.now
    }
});

const Messages=mongoose.model('Messages', MessageSchema)

module.exports = Messages;