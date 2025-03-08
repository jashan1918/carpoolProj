const {Router} = require ("express");
const {signup,signin,getUserProfile} = require ("../../controllers/authController");

const userVerification = require ('../../middlewares/userAuth');


const userRouter = Router();


userRouter.post('/signup',signup);
userRouter.post('/signin',signin);

userRouter.get('/profile', userVerification, getUserProfile);



module.exports = userRouter;


