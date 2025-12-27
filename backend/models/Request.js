const mongoose = require('mongoose');
const RequestSchema = new mongoose.Schema({
    bookName:{type:String, required:true},
    description:{type:String, required:true},
    userName:{type:String},
    status:{type:String,default:'Pending'},
    createdAt:{type:Date,default:Date.now}
})
module.exports = mongoose.model('Request',RequestSchema);