const movieSchema = mongoose.Schema({
    image: String,
    movieName:{
        type: String,
        required: true,
    },
    rating: Number,
    title: {
        type:String,
        trim:true,
    },
    genre:{

    }

})

module.exports = mongoose.model("Movie", movieSchema);