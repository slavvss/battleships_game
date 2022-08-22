var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var arrayHit = [];

while (isSunk == false) {
	guess = prompt("Салют! Это мини-игра морской бой! Представь, что в 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3х палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Нужно ввести число от 0 до 6");
	} else {
		guesses = guesses + 1;
		if (arrayHit.indexOf(guess) == -1) {
			if (guess == location1 || guess == location2 || guess == location3) {
				arrayHit.push(guess);
				alert("Попадание!");
				hits = hits + 1;
				if (hits == 3) {
				isSunk = true;
				alert("Корабль идёт ко дну!");
				}
			} else {
				alert("Мимо!");
			}
		} else {
			alert("Выстрел сюда уже был");
		}
	}
}

var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(stats);
