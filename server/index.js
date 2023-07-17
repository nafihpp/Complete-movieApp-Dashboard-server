const express = require("express");
const app = express();
const { connectDb } = require("./config/dbConfig");
require("dotenv").config();

const PORT = process.env.PORT;
connectDb();

//routes
app.use("/api/auth", AuthRoute);
app.use("/api/admin", adminRoute);
app.use("/api/movies", movieRoute);
app.use("/api/genres", genreRoute);

app.use("*", (res) => {
    res.status(404).json({
        message: "Route does not exist",
    });
});

app.listen(PORT,() =>{
    console.log(`Listening to ${PORT}`)
})