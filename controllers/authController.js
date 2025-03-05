const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
JWT_SECRET = "simpleKey";

const userModel = require("../database/db");
const signupSchema = require ("../validations/authSchemas");




exports.signup = async (req, res) => {
    try{
    console.log("Received body:", req.body);

   const validation = signupSchema.safeParse(req.body);

   if(!validation.success){
    return res.status(400).json({message : validation.errors.error});
   }

    const {username,email,password} = (req.body);
    
    const hashedPassword = await bcrypt.hash(password,5);

   await userModel.create({
       username,
       email,
       password : hashedPassword,
       isDriver : false

   })
    res.json({message : "the user is added"});
} catch (error){
    console.error("signup error",error);
    res.status(500).json({ error: "Something went wrong" });
}
};

 
exports.signin = (req,res)=>{
   
    

}