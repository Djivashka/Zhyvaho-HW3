// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

const hamburger = 3;
const fries = 3;

if(hamburger >= 4 && fries >= 1){
    console.log('Ми поїли');
} else {
    console.log('Ми йдемо в інше кафе')
}


// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let num = 1900

if(num <= 1900 && num >= 1000){
    console.log('True');
} else {
    console.log('False')
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

let num1 = 900

if(num1 >= 1900 || num1 <= 1000){
    console.log('True');
} else {
    console.log('False')
}

let num2 = 2000

if(!num2 <= 1900 || !num2 >= 1000){
    console.log('True');
} else {
    console.log('False');
}

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let timeOfYear = ['winter', 'spring', 'summer', 'autumn']

let num3 = 2;

if(num3 === 0){
        console.log(timeOfYear[0]);
}   else if (num3 === 1){
        console.log(timeOfYear[1]);
}   else if (num3 === 2){
        console.log(timeOfYear[2]);
}   else if (num3 === 3){
        console.log(timeOfYear[3]);
}   else {
        console.log('No match');
    }


    // 5.  Задано 3 числа (a, b, c), які не рівні між собою.
    // Визначити середнє мід цими трьома числами
    // (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    // Використати вкладені оператори if
    // Результат виводити в консоль.

    let a = 7;
    let b = 8;
    let c = 6;

    if(a > b && a < c || a > c && a < b){
        console.log(a);
    }   else if (b > a && b < c || b < a && b > c){
        console.log(b);
    }   else if (c > a && c < b || c < a && c > b){
        console.log(c);
    }

    // 6.  Задано номер дня тижня.
    // За заданим номером вивести назву дня тижня використовуючи switch.
    // Результат виводити в консоль.

   const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
   let day = 3
   
    switch(day){
        case 0:
            console.log(week[0])
            break;
        case 1:
            console.log(week[1])
            break;
        case 2:
            console.log(week[2])
            break;
        case 3:
            console.log(week[3])
            break;
        case 4:
            console.log(week[4])
            break;
        case 5:
            console.log(week[5])
            break;
        case 6:
            console.log(week[6])
            break;
    }

    // 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    // Математичні операції для обчислення: "+", "-", "*", "/".
    // Результат виводити в консоль.


   const mathEquations = [2, 4]
   let mathOperation = '-'
    switch(mathOperation){
        case '+':
            console.log(mathEquations[0] + mathEquations[1])
            break;
        case '-':
            console.log(mathEquations[0] - mathEquations[1])
            break;
        case '*':
            console.log(mathEquations[0] * mathEquations[1])
            break;
        case '/':
            console.log(mathEquations[0] / mathEquations[1])
            break;
    }

    // 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let word = 'Привіт';
let wordWithOutVowels = word.split('').filter(letter => !['й','у','е','і','а','о', 'є', 'я', 'и', 'ь', 'ю'].includes(letter.toLowerCase())).join('');
console.log(wordWithOutVowels);

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закнченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

let numOfMeters = 101000
let numOfKilometer = numOfMeters/1000
let lastNum = numOfKilometer%10

if (numOfKilometer < 1) {
        console.log(numOfKilometer + ' кілометра');
}   else if (numOfKilometer > 1 && numOfKilometer < 5){
        console.log(numOfKilometer + ' кілометри');
}   else if (numOfKilometer >= 5 && numOfKilometer <=100){
        console.log(numOfKilometer + ' кілометрів');
}   else if (numOfKilometer === 1){
    console.log(numOfKilometer + ' кілометр');
}   else if (numOfKilometer > 100 && lastNum === 1){
    console.log(numOfKilometer + ' кілометр');
}   else if (numOfKilometer > 100 && lastNum > 1 && lastNum < 5){
    console.log(numOfKilometer + ' кілометри');
}   else if (numOfKilometer > 100 && lastNum >= 5 || lastNum === 0){
    console.log(numOfKilometer + ' кілометрів');
}   






