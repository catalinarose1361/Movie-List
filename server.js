const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose")
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
// app.use(bodyParser.json()); --old will give you a depreciation warning

app.use(cors());

//mongoose connection string from mongoDB atlas
mongoose.connect("mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/moviesDB?retryWrites=true&w=majority")

// data schema 
const movieSchema = {
    title: String,
    genre: String,
    year: String
}
// Mongoose Model
const Movie = mongoose.model("Movie", movieSchema);

//API routes
app.get('/movies', function(req, res) {
    //test to see if server is running
    // res.send("express is here")
    //find the movies then extract data as json
    Movie.find().then(movies => res.json(movies));
})

app.listen(port, function() {
    console.log("express is running");
})