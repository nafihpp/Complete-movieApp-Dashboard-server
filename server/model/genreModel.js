const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
    genre:{
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = mongoose.model("Genre", genreSchema);