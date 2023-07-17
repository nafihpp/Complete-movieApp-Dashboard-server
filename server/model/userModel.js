const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        trim: true,
    },
    role:{
        default : "User",
    },
    otp:{
        type: Number,
        minLength: 2,
        maxLength: 6,
    },
    watchlater:{
        
    }
})

module.exports = mongoose.model("User", userSchema);