const {Router} = require("express");

const carpoolRouter = Router();


carpoolRouter.get('/',(req,res)=>{

    res.send("this provides with all the carpools available");
})
carpoolRouter.get('/:id',(req,res)=>{

    res.send("this provides specific carpool with an id");
})
carpoolRouter.post('/',(req,res)=>{

    res.send("create a new carpool");
})
carpoolRouter.put('/:id',(req,res)=>{

    res.send("this updates a current carpool by id");
})
carpoolRouter.delete('/:id',(req,res)=>{

    res.send("this deletes a carpool by id");
})





module.exports = carpoolRouter;