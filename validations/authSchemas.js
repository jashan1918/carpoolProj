const {z} = require ("zod");

const signupSchema = z.object({
    username : z.string().min(3).max(20),
    email: z.string().email().max(100),
    password: z.string().min(8).max(50)
})


module.exports = signupSchema