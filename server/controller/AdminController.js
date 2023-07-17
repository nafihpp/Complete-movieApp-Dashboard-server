const addMovie = async (req, res) => {
    try {
        return res.status(200).json({message:"Image Uploaded Successfully"});
    } catch (error) {
        res.status(400).json({
            message: "Error uploading Image",
        });
    }
};
const updateMovie = () =>{

}

const deleteMovie = () =>{

}
module.exports = {
    addMovie,
    updateMovie,
    deleteMovie
}
