const jwt = require("jsonwebtoken");
JWT_SECRET = "simpleKey";

const userModel = require("../database/db");




exports.signup = async (req, res) => {
    console.log("Received body:", req.body);

    const name = req.body.username;
    const pass = req.body.password;

   await userModel.create({
       username : name,
       password : pass

   })
    res.json({message : "the user is added"});
};


exports.signin = (req,res)=>{
   
    console.log(req.body);
    
    const name = req.body.username;
    const pass = req.body.password;

   const user = userArr.find(u => u.username === name);
   
   if(!user){
    return res.status(404).json({
        error: "this user does not exist"
    })
   }
   if (user.password !== pass) {
    return res.status(401).json({ error: "The password is incorrect" });
}


//THIS IS THE JWT SECTION

const token = jwt.sign({username : name},JWT_SECRET);

res.json({
    state : "you re signed in",
    token : token
})
    

   


}