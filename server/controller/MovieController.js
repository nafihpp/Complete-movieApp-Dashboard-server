const getAllMovies = async (req, res, next) => {
    try {
    } catch (error) {
        res.status(400).json({
            message: "error",
        });
    }
};

const searchMovie = () =>{

}

const addwatchLater = () =>{

}

const removeWatchLater = () =>{

}

module.exports = {
    getAllImages,
    searchMovie,
    addwatchLater,
    removeWatchLater
};