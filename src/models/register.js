const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    country:{type:String},
    enteremail:{type:String, required:true, unique:true},
    phoneNumber:{type:Number, required:true, unique:true},
    subject:{type:String, required:true},
    //email:{type:String, required:true, unique:true}
})

const Register = new mongoose.model("Contact", workerSchema);

module.exports = Register;