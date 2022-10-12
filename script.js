"use strict";


const numberOfFilms = +prompt('How many movies did you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('What is your last movie?', '');
const yourMark = prompt('How did you rate this movie?', '');
const latestFilm = prompt('What is your latest movie?', '');
const latestMark = prompt('How did you rate the latest movie?', '');

personalMovieDB.movies[lastFilm] = yourMark;
personalMovieDB.movies[latestFilm] = latestMark;

console.log(personalMovieDB);