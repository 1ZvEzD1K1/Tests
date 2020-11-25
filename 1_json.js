
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : "23123", "age": 15, "password": "*****" }'

*/
var myForm = document.getElementById('myForm');
var btn = myForm.querySelector('button');
btn.onclick = (event) => {
  event.preventDefault();
  let newObj = {}
  newObj.name = myForm.elements.name.value;
  newObj.age = myForm.elements.age.value;
  newObj.password = myForm.elements.password.value;

  let objJSON = JSON.stringify(newObj);
  console.log(objJSON);
}

var myForm2 = document.getElementById('myForm2');
var btn2 = myForm2.querySelector('button');
btn2.onclick = (event) => {
  event.preventDefault();
  let newJSON = JSON.parse(myForm2.elements.text.value);
  console.log(newJSON);
} 
