const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Jashan:ZfUy8apXhCXbka1p@jashan.vp6vf.mongodb.net/carpoolProj?retryWrites=true&w=majority&appName=Jashan");

const userSchema = new mongoose.Schema({

    username: String,
    password: String
})

// const MyModel = mongoose.model('ModelName', mySchema);

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;