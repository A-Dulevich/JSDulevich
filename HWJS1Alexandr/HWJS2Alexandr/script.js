// // 1) Вывести кубы чисел от 3 до n с шагом 3. 
// // Значение для переменной n попросите пользователя ввести с клавиатуры

// let endNumber = Number(prompt("Введите конечное число:"));
// for (let i = 3 ; i <= endNumber; i += 3 ){
//     console.log(i ** 3);
// }

// // // 2) Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее)

// let firstNumber = Number(prompt("Введите первое число"));
// let secondNumber = Number(prompt("Введите второе число:"));
// if (secondNumber > firstNumber){
//     console.log("Макстимальное число:" + secondNumber );
// } else if (secondNumber === firstNumber) {
//     console.log("Числа равны")
// }else {console.log("Макстимальное число:" + firstNumber);
// }

// 3) Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz" + "Buzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if ((i % 3 === 0)) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
// 4)Предусмотреть массив и сразу же в коде заполнить его разными числами, положительными и отрицательными. Посчитать сумму только положительных чисел

let newArr = [2, -5, 7, -10, 6, -20];

function arraySum(newArr) {
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > 0) {
            sum += newArr[i];
        } else {};
    }
    console.log(sum);
}
arraySum(newArr);

// Создать объект с именами и заработными платами
// let obj = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль красивым текстом заработную плату Пети и Коли.

let salary = {
    Den: 1000,
    Petya: 5000,
    Nic: 2000,
}
console.log(`Заработная плата Николая: ${salary.Nic}  BYN.`);
console.log(`Заработная плата Пети: ${salary.Petya}  BYN.`);

// Написать функцию вывода в консоль случайного цвета. Ваша программа - всего две следующие строчки (ни больше, ни меньше):
// let x = getRandomColor();
// console.log(x); // строка, например "rgb(10,55,250)"
// Здесь у вас будет две функции, одна ваша getRandomColor, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (скопируйте себе и пользуйтесь):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// еще ПОДСКАЗКА: каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. Одна функция может вызывать другую функцию

function getRandomColor() {
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; 
    }  
    return `rgb (${getRandomInteger(0,255)} ,${getRandomInteger(0,255)}, ${getRandomInteger(0,255)})`;   
} 
 let x = getRandomColor();
  console.log(x);

    