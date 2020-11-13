/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

var train = {
    name: "Bamboozler",
    speed: "999 km/h",
    humans: 0,
    go: function() {
        console.log("Поезд " + this.name + " везет " + this.humans + " пассажиров со скоростью " + this.speed);  
    },
    state: function() {
        console.log(`Поезд ${this.name} остановился. Скорость 0`);
    },
    takeAHuman: function() {
        this.humans++;
    }
}

train.go();
train.state();
train.takeAHuman();
train.go();