const { Router } = require("express");
const {
  signup,
  signin,
  getUserProfile,
  updateProfile,
  becomeDriver,
  createRide,
  updateRide,
  deleteRide,
  bookingRide,
  confirmBooking,
} = require("../../controllers/authController");

const userVerification = require("../../middlewares/userAuth");

const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

userRouter.get("/get-profile", userVerification, getUserProfile);

userRouter.patch("/update-profile", userVerification, updateProfile);

userRouter.put("/become-driver", userVerification, becomeDriver);

userRouter.post("/create-ride", userVerification, createRide);

userRouter.patch("/update-ride/:rideId", userVerification, updateRide);

userRouter.delete("/delete-ride/:rideId", userVerification, deleteRide);

userRouter.post("/booking-ride/:rideId", userVerification, bookingRide);

userRouter.put("/confirm-bookig/:bookingId", confirmBooking);

module.exports = userRouter;
