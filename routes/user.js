const express = require("express")


// controller function
const {
    loginUser,
    signupUser
} = require("../controller/userController")

const router = express.Router()


// login route
router.post("/login", loginUser)

// register route
router.post("/signup", signupUser)



module.exports = router
