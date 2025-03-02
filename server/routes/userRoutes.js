const {Router} = require ("express");

const userRouter = Router();


userRouter.get("/signup",(req,res)=>{
    res.send("the user is signed up");
})

userRouter.get("/signin",(req,res)=>{
    res.send("the user is signed up");
})
userRouter.get("/",(req,res)=>{
    res.send("the user is signed up");
})


module.exports = userRouter;