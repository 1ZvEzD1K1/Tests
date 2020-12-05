/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
document.addEventListener("DOMContentLoaded", () => {
    var form = document.getElementById('myForm');
    var names = form.elements.name;
    var pass = form.elements.pass;
    var enter = document.getElementById('btn');
    var quit = document.getElementById('btn1');

    enter.onclick = () =>{
        var patterp = /(\w+)@(\w+.)(\w+)/g;
        var log = names.value;
        var res = log.match(patterp);
        if (res !== null) {
        localStorage.setItem("login", res);
        localStorage.setItem("password", pass.value);
        names.value = "";
        pass.value = "";
        alert("Hello " + res);
        } else {
            alert("Invalid login");
        }
    };

    quit.onclick = () =>{
        localStorage.removeItem("login");
        localStorage.removeItem("password");
    };

    if (localStorage.getItem("login") !== null) {
        alert("Hello " + localStorage.getItem("login"));  
    }
})

