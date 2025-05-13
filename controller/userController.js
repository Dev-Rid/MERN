const User = require("../model/userModel") // import the user model
const jwt = require("jsonwebtoken") // import jsonwebtoken

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"})
}


// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password) // call the signup method from the user model
    
        // create a token
        const token = createToken(user._id)
        res.status(200).json({email, token}) // send the user as a response
        
    } catch (error) {          
        res.status(400).json({error: error.message}) // send the error as a response
    }
    
}   

// signup user
const signupUser = async (req, res) =>{
    const { email, password } = req.body // destructure the request body

    try {
        const user = await User.signup(email, password) // call the signup method from the user model
        
        // create a token
        const token = createToken(user._id)
        
        res.status(200).json({email, token}) // send the user as a response
        
    } catch (error) {
        res.status(400).json({error: error.message}) // send the error as a response
        console.log(error.message)
    }

}


module.exports ={
    signupUser,
    loginUser
}