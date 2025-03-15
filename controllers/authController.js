require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { userModel, rideModel } = require("../database/db");
const {
  signupSchema,
  createRideSchema,
} = require("../validations/authSchemas");

const userVerification = require("../middlewares/userAuth");

exports.signup = async (req, res) => {
  try {
    console.log("Received body:", req.body);

    const validation = signupSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({ message: validation.error.errors });
    }

    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
      username,
      email,
      password: hashedPassword,
      isDriver: false,
    });
    res.json({ message: "the user is added" });
  } catch (error) {
    console.error("signup error", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.signin = async (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;

  try {
    const foundUser = await userModel.findOne({
      username: username,
    });

    if (!foundUser) {
      return res.status(400).json({ message: "this user does not exist" });
    } else {
      const pass = await bcrypt.compare(password, foundUser.password);

      if (!pass) {
        return res
          .status(400)
          .json({ message: "your password or username is wrong" });
      } else {
        const token = jwt.sign(
          { userId: foundUser._id, username: foundUser.username },
          process.env.JWT_SECRET
        );

        return res.json({
          message: "you are signed in",
          token: token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

exports.getUserProfile = async (req, res) => {
  const foundUser = await userModel.findOne({
    username: req.user.username,
  });

  if (!foundUser) {
    return res.status(400).json({ message: "something went wrong" });
  } else {
    res.json({
      username: foundUser.username,
      email: foundUser.email,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updates = {};

    Object.keys(req.body).forEach((key) => {
      if (req.body[key]) {
        updates[key] = req.body[key];
      }
    });

    const updatedUser = await userModel.findOneAndUpdate(
      { username: req.user.username },
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(400).json({ error: "User not found" });
    } else {
      return res.json({ message: "Profile updated successfully", updatedUser });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.becomeDriver = async (req, res) => {
  console.log("REQ.USER:", req.user);

  try {
    const requiredFields = [
      "vehicleType",
      "vehicleModel",
      "vehicleCapacity",
      "vehicleNumber",
    ];

    const allFieldsProvided = requiredFields.every(
      (field) => req.body.vehicleDetails[field] !== undefined
    );

    if (!allFieldsProvided) {
      return res.status(400).json({
        error: "fill up all the fields",
      });
    }

    const becameDriver = await userModel.findOneAndUpdate(
      { username: req.user.username },
      {
        $set: {
          vehicleDetails: req.body.vehicleDetails,
          isDriver: true, // Also mark user as a driver
        },
      },
      { new: true, runValidators: true }
    );

    console.log("Updated User Data:", becameDriver);

    if (becameDriver) {
      return res.json("You are updated to a driver");
    }
  } catch (error) {
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

exports.createRide = async (req, res) => {
  try {
    // Debug what's actually in req.user
    console.log("Full req.user object:", JSON.stringify(req.user));

    const requiredFields = [
      "pickup",
      "destination",
      "totalSeats",
      "pricePerSeat",
    ];
    const allFieldsProvided = requiredFields.every(
      (field) => req.body[field] !== undefined
    );

    if (!allFieldsProvided) {
      return res
        .status(400)
        .json({ message: "Fill all the fields before submitting the data" });
    }

    // Get the user ID from req.user
    const userId = req.user.userId;

    // Verify we have a user ID
    if (!userId) {
      return res.status(400).json({ message: "User ID not found in token" });
    }

    const createdRide = await rideModel.create({
      driverId: userId,
      pickup: req.body.pickup,
      destination: req.body.destination,
      totalSeats: req.body.totalSeats,
      pricePerSeat: req.body.pricePerSeat,
    });

    res.status(201).json({
      message: "The ride has been created",
      rideId: createdRide._id,
    });
  } catch (error) {
    console.error("Error creating ride:", error);
    return res
      .status(500)
      .json({ error: "INTERNAL SERVER ERROR", details: error.message });
  }
};

exports.updateRide = async (req, res) => {
  try {
    //fetching the rideId first
    const rideId = req.params.rideId;

    //getting the information that is to be updated
    const updates = {};

    Object.keys(req.body).forEach((key) => {
      if (req.body[key] !== null && req.body[key] !== "") {
        updates[key] = req.body[key];
      }
    });

    const updatingFields = await rideModel.findOneAndUpdate(
      { _id: rideId },
      {
        $set: updates,
      },
      { new: true, runValidators: true }
    );

    if (updatingFields) {
      res.status(200).json({ message: "ride edited succesfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "INTERNAL SERVER ERROR", error });
  }
};

exports.deleteRide = async (req, res) => {

 
      try {
          const { rideId } = req.params; // Get ride ID from request params
  
          // Check if ride exists
          const ride = await rideModel.findById(rideId);
          if (!ride) {
              return res.status(404).json({ message: "Ride not found" });
          }
  
          // Delete the ride
          await rideModel.findByIdAndDelete(rideId);
  
          res.status(200).json({ message: "Ride deleted successfully" });
      } catch (error) {
          res.status(500).json({ message: "Server error", error: error.message });
      }
  };

