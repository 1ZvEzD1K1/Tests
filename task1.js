/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/

var CommentsArray = ["myComment1", "myComment2", "myComment3", "myComment4"];


function Obj(name, text, avatarUrl) {
  this.name = name;
  this.text = text;
  this.avatarUrl = avatarUrl;
  this.likes = 0; 
  this.avatarUrl = avatarUrl;
}
 

var Aleksey = new Obj("Aleksey", "12345", "123.jpg");

var newAlexey = {...Aleksey};
newAlexey.likesPlus = function () {
  this.likes++;
}
newAlexey.avatarUrl = "321.jpg";

console.log(newAlexey.avatarUrl);
console.log(newAlexey.likes);
newAlexey.likesPlus();
console.log(newAlexey.likes);

var div = document.getElementById('CommentsFeed');
function myComment(CommentsArray) {
  for (let i = 0; i < CommentsArray.length; i++) {
    var p = document.createElement('p');
    p.innerText = CommentsArray[i];
    div.appendChild(p);
  }
}
myComment(CommentsArray);
