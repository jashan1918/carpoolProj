require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userModel = require("../database/db");
const signupSchema = require("../validations/authSchemas");

const userVerification = require("../middlewares/userAuth");

exports.signup = async (req, res) => {
  try {
    console.log("Received body:", req.body);

    const validation = signupSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({ message: validation.errors.error });
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
        const token = await jwt.sign(
          { username: username },
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
      }else{
  
      return res.json({ message: "Profile updated successfully", updatedUser });
    }
  
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };
  
exports.becomeDriver = async (req,res) => {

  try{
  const requiredFields = ["vehicleType", "vehicleModel", "vehicleCapacity", "vehicleNumber"];

 const allFieldsProvided = requiredFields.every((field) => req.body.vehicleDetails[field] !== undefined);

 if(!allFieldsProvided) {
  return res.status(400).json({
    error : "fill up all the fields"
  })
 }

  const becameDriver = await userModel.findOneAndUpdate(
      {username : req.user.username},
      {$set : req.body.vehicleDetails},
      {new: true, runValidators : true}
  )
  if(becameDriver){
    return res.json("You are updated to a driver");
  }
}catch(error){
  res.status(500).json({message : "INTERNAL SERVER ERROR"});
}
};