const User = require("../model/userModel")


// login user
const loginUser = async () => {
    res.json({msg: "Login User"})
}

// signup user
const signupUser = async () =>{
    res.json({msg: "SignUp User"})
}


module.exports ={
    signupUser,
    loginUser
}