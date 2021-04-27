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
//add movie
app.post('/newMovie', function(req, res) {
    //deconstructing the object sent fron the front end
    const title = req.body.title;
    const genre = req.body.genre;
    const year = req.body.year;
    //creating new movie in DB using our model Movie
    const newMovie = new Movie({
        title,
        genre,
        year
    })
    //saving our new movie
    newMovie.save()
});

//delete movie

app.delete('/delete/:id', function(req, res) {
    //reconstruct id
    const id = req.params.id;
    //when the model id matches this id, delete
    Movie.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("movie deleted");
        } else console.log(err);
    })
})

//when in production connect the back end to the static build files
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, function() {
    console.log("express is running");
})