'use strict';

const isNumner = function(n) {
    let tempVar = !NaN(parseFloat(n))
        && isFinite(n)
        && +n >= 1
        && +n <= 100
        && +n === Math.floor(+n);
    if (!tempVar) { alert('Введите целое число от 1 до 100'); }
    return tempVar;
};

const getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
};

const game = function() {
    const randomNumber = getRandomNumber(1, 100);
    let count = 10;
    let regame = false;
    
    const asking = function() {
        count--;
        

        if (count >= 0) {
            const num = prompt("Угадай число от 1 до 100");   
        
        
            if (!isNaN(parseFloat(num)) && isFinite(num)) {
                if(num >= 1 && num < randomNumber) {
                    alert(` Загаданное число больше, осталось попыток: ${count}`);
                    asking();
                } else if (num > randomNumber && num <= 100) {
                    alert(`Загаданное число меньше, осталось попыток: ${count}`);
                    asking();
                } else if (num == randomNumber) {
                    alert("Поздравляю, Вы угадали!!!");

                    regame = confirm("Хотите сыграть еще?");
                    if (regame) {
                        game();
                    } else {
                        alert("Игра окончена");
                    }               
                } 

            } else if (num === null) {
                alert("Игра окончена!");
            } else {
                alert("Введите число");
                asking();
            }
        } else {
            alert("Попытки закончились!");
            regame = confirm("Хотите сыграть еще?");
                    if (regame) {
                        game();
                    } else {
                        alert("Игра окончена");
                    } 
        }
    }    
    asking();    
}
game();
