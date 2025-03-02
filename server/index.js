const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes");
const carpoolRouter = require("./routes/carpoolRoutes");

//USER ROUTES

app.use('/user',userRouter);
app.use('/carpools',carpoolRouter);




app.listen(3000,()=>{
    console.log("this server is running on port 3000");
})