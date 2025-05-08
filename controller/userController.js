const User = require("../model/userModel")



// login user
const loginUser = async() => {
    res.json({msg: "Login User"})
}

// signup usr
const signUpUser = async () =>{
    res.json({msg: "SignUp User"})
}


module.exports ={
    signupUser,
    loginUser
}