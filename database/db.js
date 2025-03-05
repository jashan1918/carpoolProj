require("dotenv").config;
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  //here is the schema if the user is a driver
  isDriver: { type: Boolean, default: false },
  vehicleDetails: {
    vehicleType: { type: String },
    vehicleModel: {type: String},
    vehicleCapacity: {type: Number},
    vehicleNumber: { type: String },
  },
},
   {timestamps : true},
);

// const MyModel = mongoose.model('ModelName', mySchema);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
