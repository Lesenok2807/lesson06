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
    console.log(randomNumber);
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

// function one(num) {
//     function two(count) {
//         const a = prompt("Угадайте число от 1 до 100");
                
//         console.log(num);
             
      
//         if (!isNaN(parseFloat(a)) && isFinite(a)) {
            
            
//             if (count < 5) {
//                 count--;
                
//                 if(a >= 1 && a < num) {
//                     alert(` Загаданное число больше, осталось попыток: ${ count }`);
//                     two();
//                 } else if (a > num && a <= 100) {
//                     alert(`Загаданное число меньше, осталось попыток: ${ count }`);
//                     two();
//                 } else if (a == num) {
//                     confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
    
//                         if (true) {
//                             two();
//                         }           
//                 } 
//              } else {
//                 confirm("Попытки закончились! Хотели бы сыграть еще?");
                
//                 if (true) {

//                     two();
//                 } 
//              }           
            
//         } else {

//              if (a !== null) {
//                  alert("Введите число");
//                  two();
//              } else {
//                 alert("Игра окончена");
//              }
//         }          
        
//     }

//     two();
// }  

// one(num(1, 100));

// const num = function(min, max) {
//     return Math.floor(Math.random() * (max - min +1) + min);

// };

// function one(num) {
//     function two() {
//         const a = prompt("Угадайте число от 1 до 100");     
      

//         console.log(a);
//         console.log(num);

//         if (!isNaN(parseFloat(a)) && isFinite(a)) {            
                
//         if(a >= 1 && a < num) {
//             alert(" Загаданное число больше");
//             two();
//         } else if (a > num && a <= 100) {
//             alert("Загаданное число меньше");
//             two();
//         } else if ( a == num) {
//             alert("Поздравляю, Вы угадали!!!");
//         }                       
        
//         } else {

//              if (a !== null) {
//                  alert("Введите число");
//                  two();
//              } else {
//                 alert("Игра окончена");
//              }
//         }          
        
//     }

//     two();
// }  

// one(num(1, 100));