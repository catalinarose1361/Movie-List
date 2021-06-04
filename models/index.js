const mongoose = require("mongoose");
const Schema = mongoose.Schema

//DATA SCHEMA
const MovieSchema = new Schema({

    
    title: {
        type: String,
        required: "Title is Required"
    },

    genre: {
        type: String,
        required: "Genre is Required"
    },
    year: {
        type: String,
        required: "Year is Required"
    }
})

// MONGOOSE MODEL
const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie
