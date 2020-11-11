/*

        Документация:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Проверка всех полей формы на валидость
        form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

        formElement.validity > Объект с параметрами валидности поля 
        formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
            сообщения выведет message в браузерный попал

        Классы для стилизации состояния элемента
        input:valid{}
        input:invalid{}

        
        Задание:
        
        Используя браузерное API для валидации форм реализовать валидацию следующей формы:
        

        - Имя пользователя: type:text -> validation: required; minlength = 2;  
            Если пустое выввести сообщение: "Как тебя зовут дружище?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Если пустой вывести сообщение: "Я никому не скажу наш секрет";
        - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
            Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
        - Напиши спасибо за яблоки: type: text -> validation: required; 
            Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

        - Согласен на обучение: type: checkbox -> validation: required;
            Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

        Внизу две кнопки:

        1) Обычный submit который отправит форму, если она валидна.
        2) Кнопка Validate(Проверить) которая запускает методы:
            - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
            - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

    */

var named = document.getElementById("name");
named.addEventListener("change", () => {
  if (named.validity.tooShort) {
    named.setCustomValidity("Как тебя зовут дружище?!");
  }
});

var email = document.getElementById("email");
email.addEventListener("change", () => {
  if (email.validity.typeMismatch && email.validity.tooShort) {
    email.setCustomValidity("Ну и зря, не получишь бандероль с яблоками!");
  }
});

var pass = document.getElementById("pass");
pass.addEventListener("change", () => {
  if (pass.validity.tooLong && email.validity.tooShort) {
    pass.setCustomValidity("Я никому не скажу наш секрет");
  }
});

var apple = document.getElementById("apple");
apple.addEventListener("change", () => {
  if (apple.validity.rangeUnderflow) {
    apple.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные");
  }
});

var thanks = document.getElementById("thanks");
thanks.addEventListener("change", () => {
  if (thanks.value !== "спасибо") {
    thanks.setCustomValidity("Фу, неблагодарный(-ая)!");
  }
});

var study = document.getElementById("study");
study.addEventListener("change", () => {
  if (study.checked !== true) {
    study.setCustomValidity("Необразованные живут дольше! Хорошо подумай!");
  } 
});

var form = document.getElementById("myForm");
var btn = document.getElementById("btn");
btn.onclick = () => {
 if (form.checkValidity() == true) {
   alert("Все Окееейй))))))");
 } else {
  form.reportValidity();
 }
};
