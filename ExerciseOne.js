'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмортрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answerOne = prompt("Один из последних просмотренных фильмов?", ""),
      answerTwo = +prompt("На сколько оцените его?", ""),
      answerTree = prompt("Один из последних просмотренных фильмов?", ""),
      answerFour = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[answerOne] = answerTwo;
personalMovieDB.movies[answerTree] = answerFour;
console.log(personalMovieDB);