var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://siddharthsoni1109:siddharthsoni1109@cluster0.vdtukvs.mongodb.net/");

const blogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    image: String,
    content: String,
    date: {
        type: Date,
        default: Date.now,
    }
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;