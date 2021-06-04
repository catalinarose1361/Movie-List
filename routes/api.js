const router = require("express").Router();

//MONGOOSE MODEL IMPORT 
const Movie = require("../models")

//FIND ALL MOVIES
router.get('/movies', function(req, res) {

    //SEND A RESPONSE TO THE FRONT END IN JSON FORMAT
    Movie.find().then(movie => res.json(movies));
});

// ADD MOVIE

//RECEIVING A POST REQUEST FROM THE FRONT END
router.post('/newMovie', function(req, res) {

   //DECONSTRUCTING THE OBJECT SENT FROM THE FRONT END
   const title = req.body.title;
   const genre = req.body.genre;
   const year = req.body.year;
   
   //CREATING A NEW MOVIE TO ADD TO MONGODB USING MOVIE MODEL
   const newMovie = new Movie({
       title,
       genre,
       year
   })

    //SAVING NEW MOVIE TO MONGODB ATLAS
    newMovie.save()
})

//REMOVE MOVIE
router.delete('/delete/:id', function(req, res) {

    //RECONSTRUCT ID SENT FROM FRONT END 
    const id = req.params.id;

    //WHEN THE ID OF THE MODEL MATCHES THIS ID, DELETE
    Movie.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("Movie Removed Sucessfully");
        } else console.log("Error movie cannot be removed")
    })


})

module.exports = router