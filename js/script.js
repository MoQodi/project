" use strict ";
//let number =4;
//console.log(4/0);
//console.log('string'*9);

//const persone = "5";

//const bool = true;

//console.log(something);

//let und;
//console.log(und);
//-----------------------------------
//const obj = {
  //  name: "John",
    //age:25,
    //isMarried:false


//};
//console.log(obj.name);
// ОбЪекты ключевая еденица JavaScripta
//Является ли Массив одтельным типом данным ? нет массив частный случай 
//let arr = ['plum.png', 'orange.jpg', 6 , 'apple.bmp', {}, []]
//console.log(arr[1]);
//-----------------------------------

//alert('Hello ');
//const result =confirm("Are you here ?");

//const answer =+prompt("Вам есть 18? ", "18");
//console.log(answer+5);
//const answers =[];
//answers[0] =prompt("Your name?", '');
//answers[1] =prompt("Your surname?", '');
//answers[2] =prompt("Your age?", '');

//document.write(answers);
// Взоимодействия сайта
//-------------------------------------------------------------------------------

// ---------------------------------------------------------
// Интерполяция
//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);
//----------------------------------------------------------
//-----------------------------------------------------
// Инкримент и Дикримент
//let incr =10,
  //  decr =10;

    //incr++;
    //decr--;

    //console.log(incr);
    //console.log(decr); 

    //console.log(5%2);
    //console.log(2+2*2 !=8);
     
    //const isChecked =true,
      //    isClose =false;
        //  console.log(isChecked || isClose);



const numberOffFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
const personalMovieDB = {
  count:numberOffFilms,
  movies:{},
  actors:{},
  genres:[],
  privat: false

};
const a =prompt("One of the last movies I saw ? ", " "),
b = prompt("How much do you appreciate it ?"," "),
c =prompt("One of the last movies I saw ?"," "),
d =prompt("How much do you appreciate it ?"," "); 
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);







