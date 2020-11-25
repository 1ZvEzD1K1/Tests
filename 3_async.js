/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/

async function getCompany() {
  const getJSONCompany = await fetch(
    "http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2"
  );
  const getDataCompany = await getJSONCompany.json();
  return getDataCompany;
}

let Companys = getCompany();
Companys.then((data) => {
  var numb = 0;
  data.forEach((el) => {
    var res = document.getElementById("res2");
    res.innerHTML += `<div>${numb} | ${el.company} | ${
      el.balance
    } | <span><button class="data">Show registration date</button><span style="display: none">${
      el.registered
    }</span></span> | <span><button class="adres">Show adres</button><span style="display: none">${
      el.address.country + ", " + el.address.city
    }</span></span></div>`;
    numb++;
  });
  var btn1 = document.getElementsByClassName("data");
  var btn1arr = Array.from(btn1);
  btn1arr.forEach((btn1el) => {
    btn1el.onclick = () => {
      var parent = btn1el.parentElement;
      var span = parent.querySelector("span");
      span.style.display = "";
      btn1el.hidden = true;
    };
  });

  var btn2 = document.getElementsByClassName("adres");
  var btn2arr = Array.from(btn2);
  btn2arr.forEach((btn2el) => {
    btn2el.onclick = () => {
      var parent1 = btn2el.parentElement;
      console.log(parent1)
      var span1 = parent1.querySelector("span");
      span1.style.display = "";
      btn2el.hidden = true;
    };
  });
});
