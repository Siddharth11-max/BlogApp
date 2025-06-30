var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://siddharthsoni1109:siddharthsoni1109@cluster0.vdtukvs.mongodb.net/")


const userSchema = new mongoose.Schema({
    username:String,
    name:String,
    email:String,
    password:String,
    isAdmin:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

const userModel =mongoose.model("user",userSchema);

module.exports = userModel;