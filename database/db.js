require("dotenv").config();
const mongoose = require("mongoose");

console.log("MongoDB URL:", process.env.MONGO_URL);

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


const rideSchema = new mongoose.Schema ({

      driverId : {type : mongoose.Schema.Types.ObjectId, ref : "users" , required : true},
      pickup : {type : String, required: true},
      destination : {type : String, required: true},
      totalSeats : {type : Number, required: true},
      pricePerSeat : {type : Number, required: true}

})

// const MyModel = mongoose.model('ModelName', mySchema);

const userModel = mongoose.model("users", userSchema);
const rideModel = mongoose.model("rides", rideSchema);

module.exports = { userModel, rideModel };
