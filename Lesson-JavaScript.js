'use strict';


let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмортрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмортрели?", "");
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = +prompt("На сколько оцените его?", "");
    
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        console.log('right!!!');
        personalMovieDB.movies[a] = b;
      } else {
        console.log('Error!!!');
        i--;
      }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(examinationFalse) {
  if (examinationFalse == false) {
  console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

console.log(personalMovieDB);







// console.log( NaN || 2 || undefined );
 
// console.log( NaN && 2 && undefined );
 
// console.log( 1 && 2 && 3 );
 
// console.log( !1 && 2 || !3 );
 
// console.log( 25 || null && !3 );
 
// console.log( NaN || null || !3 || undefined || 5);
 
// console.log( NaN || null && !3 && undefined || 5);
 
// console.log( 5 === 5 && 3 > 1 || 5);
    
// console.log((2 || 3) && 5);  

// let arrOne = [];

// let oneArr = document.getElementById('oneArr');
// let buttonArr = document.getElementById('buttonArr');

// if (oneArr == '') {
//     buttonArr.onclick = true;
//     arrOne.push(oneArr);
// }
// console.log(arrOne);

// let resalt = '';
// let lengthOne = 8;

// for (let i = 1; i < lengthOne; i++) {
    
//     for (let j = 1; j < i; j++) {
//         resalt += '*';
//     }
    
//     resalt += '\n';
// }
// console.log(resalt);

// let str = '';

// for (let i = 0; i < 5; i++) {
//   if (i === 1) {
//     continue;
//   }
//   str = str + i;
// }

// console.log(str);

// let i, j;

// loop1:
// for (i = 0; i < 3; i++) {      //Первый цикл, обозначенный меткой "loop1"
//    loop2:
//    for (j = 0; j < 3; j++) {   //Второй цикл, обозначенный меткой "loop2"
//       if (i === 1 && j === 1) {
//          break loop1;
//       }
//       console.log('i = ' + i + ', j = ' + j);
//    }
// }

// do {
//   i++;
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = +prompt("На сколько оцените его?", "");
  
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       console.log('right!!!');
//       personalMovieDB.movies[a] = b;
//     } else {
//       console.log('Error!!!');
//       i--;
//     }
// } while (i < 2);

// while (i < 2) {
//   i++;
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = +prompt("На сколько оцените его?", "");
  
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       console.log('right!!!');
//       personalMovieDB.movies[a] = b;
//     } else {
//       console.log('Error!!!');
//       i--;
//     }
//     i++;
// } 