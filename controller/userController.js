const User = require("../model/userModel")


// login user
const loginUser = async (req, res) => {
    res.json({msg: "Login User"})
    // console.log("Login User")
}

// signup user
const signupUser = async (req, res) =>{
    res.json({msg: "SignUp User"})
}


module.exports ={
    signupUser,
    loginUser
}