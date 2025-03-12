const {z} = require ("zod");

const signupSchema = z.object({
    username : z.string().min(3).max(20),
    email: z.string().email().max(100),
    password: z.string().min(8).max(50)
})


const createRideSchema = z.object({
    pickup: z.string().min(3, "Pickup location is required"),
    destination: z.string().min(3, "Destination is required"),
    totalSeats: z.number().int().positive("Total seats must be a positive number"),
    pricePerSeats: z.number().positive("Price per seat must be a positive number"),
})

module.exports = {signupSchema, createRideSchema};