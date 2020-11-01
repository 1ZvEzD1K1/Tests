/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/

var app = document.getElementById("app");
var txt = document.createElement("p");
function randomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bg() {
  document.body.style.background =
    "rgb(" +
    randomColor(0, 255) +
    "," +
    randomColor(0, 255) +
    "," +
    randomColor(0, 255) +
    ")";
  txt.innerHTML =
    "rgb(" +
    randomColor(0, 255) +
    "," +
    randomColor(0, 255) +
    "," +
    randomColor(0, 255) +
    ")";
  el.appendChild(txt);
  app.appendChild(el);
}
function bg2() {
  var first = randomColor(0, 255).toString(16).padStart(2,0);
  var second = randomColor(0, 255).toString(16).padStart(2,0);
  var third = randomColor(0, 255).toString(16).padStart(2,0);
  document.body.style.backgroundColor = "#" + first + second + third;
  txt.innerHTML = "#" + first + second + third;
  
  el.appendChild(txt);
  app.appendChild(el);
}
var el = document.createElement("div");
el.style.background = "white";
el.style.width = "120px";
el.style.height = "20px";
el.style.margin = "auto";
