'use strict';

const a = 25, 
    b = 100, 
    c = 15;

// if (a > b){
//     console.log('a > b')
// } else if (b > c){
//     console.log('b > c')
// } else {
//     console.log(c)
// };

// if (b > a){
//     if (b > c){
//         console.log('b is biggest')
//     } else {
//         console.log('c is biggest')
//     }
// } else if (a > c){
//     if (a > b){
//         console.log('a is biggest')
//     } else {
//         console.log('b is biggest')
//     }
// } else if (c > a){
//     if (c > b){
//         console.log ('c is biggest')
//     } else {
//         console.log ('b is biggest')
//     }
// } 

// if ( 5 > 10){
//     console.log('false')
// } else {
//     console.log ('true')
// }

// (5 > 10) ? console.log('false') : console.log('true');

// const age = 16;
// const canVote = (age >= 18) ? 'Yes' : 'No';

// console.log (`Can you vote? ${canVote}`);

// for (let i = 0; i <= 5; i++){
//     console.log(`iteration N${i}`);
// }

// let i = 0;
// while (i <=5){
//     console.log(`iteration N${i}`);
//     i++;
// };

let text = 'Vasya Pupkin';

// for (let i = 0; i < text.length; i++){
//     console.log(text[i]);
//     if (i == 5){
//         break;
//     }
// }

const arr = [2,4,6,8,10];

// arr.forEach(function(a, i){
//     console.log(`${i}: ${a}`);
// });

// for (let x of arr){  //for in - для обєктів
//     console.log(x);
// }

const num = [-2,3,6,-32,23,45];

//1. Знайти всі парні числа масиву num
//2. Знайти всі парні додатні числа масиву num

// for( let x of num){
//    if (x % 2 == 0 && x > 0){
//     console.log(x);
//    } 
// }

//Числа фібоначі
//Вивести N чисел фібоначі. N = 8 //0,1,1,2,3,5,8,13
// const numbers = [0,1], n = 10;

// for(let i = 1; i < n - 1; i++){
//     numbers.push(numbers[i-1] + numbers[i]);
// }

// console.log(numbers)
// Вивести всі прості числа від 1 до заданого N

const n = 30;

// for (let i = 1; i < n; i++){
//     let isSimple = true,
//         end = (i <=9) ? i : 9;
//     for (let j = 2; j < end; j++){
//         if (i % j == 0){
//             isSimple = false;
//             break;
//         }
//     }

//     if (isSimple){
//         console.log(i);
//     }
// }

document.querySelector('#btn').onclick = function(e){
    e.preventDefault();
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    
    document.querySelector('.result').innerHTML = +num1 * +num2;
}