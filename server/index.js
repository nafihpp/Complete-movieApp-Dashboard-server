const express = require("express");
const app = express();
const {logger} = require("node-logger-middleware");
const { connectDb } = require("./config/dbConfig");
require("dotenv").config();

const PORT = process.env.PORT;
app.use(logger);
connectDb();

//routes
app.use("/api", Auth);

app.use("*", (req, res) => {
    res.status(404).json({
        message: "Route does not exist",
    });
});

app.listen(PORT,() =>{
    console.log(`Listening to ${PORT}`)
})