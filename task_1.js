/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

var btn = document.getElementById("btn");

function randomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.onclick = () => {
  var colorNow =
    "rgb(" +
    randomColor(0, 255) +
    "," +
    randomColor(0, 255) +
    "," +
    randomColor(0, 255) +
    ")";
  document.body.style.background = colorNow;
  localStorage.setItem("Color", colorNow);
};

document.addEventListener("DOMContentLoaded", function () {
    var lastColor = localStorage.getItem("Color");
    document.body.style.background = lastColor;
  }
);
