const express = require("express");
const app = express();




app.get("/",(req,res)=>{
    res.json("yes this is the home page");
})


app.listen(3000,()=>{
    console.log("this server is running on port 3000");
})