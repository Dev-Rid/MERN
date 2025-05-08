const User = require("../model/userModel") // import the user model


// login user
const loginUser = async (req, res) => {
    res.json({msg: "Login User"})
}

// signup user
const signupUser = async (req, res) =>{
    const { email, password } = req.body // destructure the request body

    try {
        const user = await User.signup(email, password) // call the signup method from the user model
        res.status(200).json({email, user}) // send the user as a response
        
    } catch (error) {
        res.status(400).json({error: error.message}) // send the error as a response
        console.log(error.message)
    }
 
}


module.exports ={
    signupUser,
    loginUser
}