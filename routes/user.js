const express = require("express");
const router = express.Router();

const {signup, login} = require("../controllers/Auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

//testing protect routes in middlewares
router.get("/test", auth, (req, res) => {
    res.json({
        success:true,
        message:"Welcome to the protected route for tests."
    });
});
//protected routes

router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success:true,
        message:"Welcome to the protected route for students."
    });
});

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success:true,
        message:"Welcome to the protected route for admin."
    });
});

module.exports = router;