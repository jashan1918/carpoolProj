const {Router} = require ("express");
const {signup,signin,getUserProfile,updateProfile,becomeDriver,createRide,updateRide} = require ("../../controllers/authController");

const userVerification = require ('../../middlewares/userAuth');


const userRouter = Router();


userRouter.post('/signup',signup);
userRouter.post('/signin',signin);

userRouter.get('/profile', userVerification, getUserProfile);

userRouter.patch('/update-profile',userVerification,updateProfile);

userRouter.put('/become-driver',userVerification,becomeDriver);

userRouter.post('/create-ride',userVerification,createRide);

userRouter.patch('/update-ride/:rideId',userVerification,updateRide);

module.exports = userRouter;


