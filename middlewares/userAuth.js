//this is the user auth MIDDLEWARE to check the authentication of the user on the user routes except the signup/signin
require("dotenv").config()

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");


const userVerification = (req, res, next) => {
    try {
        const token = req.headers.token;  

        console.log("Received Token:", req.headers.token);
console.log("Authorization Header:", req.header("Authorization"));


        if (!token) {
            console.log("No token provided!");
            return res.status(401).json({ error: "No token provided" });
        }

        
       const userData =  jwt.verify(token, process.env.JWT_SECRET);
       req.user = userData;

       console.log("Decoded user data:", req.user); // Debugging

        console.log("User verified successfully");
        next();  

    } catch (err) {
        console.error("JWT Error:", err.message);

        return res.status(401).json({
            error: "Authentication failed",
            details: err.message
        });
    }
};

module.exports = userVerification