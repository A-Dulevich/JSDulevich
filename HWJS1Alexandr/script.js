console.log(" Задание 1");
let numberOne = 1;
let numberTwo = 2;
console.log("Число 1 = " + numberOne);
console.log("Число 2 = " + numberTwo);
numberOne = numberOne + numberTwo;
numberTwo = numberTwo - numberOne;
numberTwo = -numberTwo;
numberOne = numberOne - numberTwo;
console.log( "Число 1 = " + numberOne);
console.log("Число 2 = " + numberTwo);

let userInputNumber = prompt("Введите число");
let userInputDegree = prompt("Ввдеите степень, в которую хотите возвести число");
console.log(userInputNumber + " в степени "  + userInputDegree + " равняется " + userInputNumber ** userInputDegree);

