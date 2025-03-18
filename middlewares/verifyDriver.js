const {userModel} = require ('../database/db')

const checkDriver = async (req,res,next) => {

    const userId = req.user.userId;

    try{
        const driverStatus = await userModel.findById(userId);

        if(!driverStatus){
            return res.status(404).json({error : "User not found"})
        }
        if(driverStatus.isDriver === false){
            return res.status(403).json({error : "ACCESS DENIED! DRIVERS ONLY"})
        } else {
            next();
        }
    }catch(error){
        return res.status(500).json({ error: error.message || "INTERNAL SERVER ERROR" });

    }

}

module.exports = checkDriver;