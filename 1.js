/*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */

var buts = document.querySelectorAll("button");
var tab = document.querySelectorAll(".tab");

// перший тестовий варіант...
// buts.forEach((el) => {
//   var counter = 1;
//   el.onclick = () => {
//     // if (!counter) {
//     //   tab[el.dataset.tab - 1].classList.add("active");
//     // } else {
//     //   tab[el.dataset.tab - 1].classList.remove("active");
//     // }
//      counter ? tab[el.dataset.tab - 1].classList.toggle("active") : tab[el.dataset.tab - 1].classList.toggle("active");
//      counter = !counter;
//   };
// });

buts.forEach((el) => {
  el.onclick = () => {
    tab[el.dataset.tab - 1].classList.toggle("active");
  };
});
