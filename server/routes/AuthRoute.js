const express = require("express");
const { login, signup, forgotPassword } = require("../controller/AuthController");
const router = express.Router();

router.post("/login", login);
router.post("/signup" , signup);
router.post("/forgot", forgotPassword);

module.exports = router;