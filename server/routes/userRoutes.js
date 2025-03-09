const {Router} = require ("express");
const {signup,signin,getUserProfile,updateProfile} = require ("../../controllers/authController");

const userVerification = require ('../../middlewares/userAuth');


const userRouter = Router();


userRouter.post('/signup',signup);
userRouter.post('/signin',signin);

userRouter.get('/profile', userVerification, getUserProfile);

userRouter.patch('/update-profile',userVerification,updateProfile);

module.exports = userRouter;


