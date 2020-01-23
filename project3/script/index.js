// var result = ``;

// for (var i = 1; i <= 10; i++){
//     for (var j = 1; j <= 10; j++){
//         result = `${i} * ${j} = ${i * j}`;
//         console.log(result);
//     }
//     console.log('');
//     console.log('');        
// }


// var numbers = [7, 2, 88, 11, 102, 3];
// var max = numbers [0];
// var secondMax = -Infinity;

// for (var i = 0; i < numbers.length; i++) {
//     if (max < numbers[i]){
//         secondMax = max;
//         max = numbers[i];
//     }
//     if (secondMax < numbers[i] && numbers[i] < max){
//         secondMax = numbers[i];
//     }
// }

// console.log(secondMax);



// function sayName1 () {
//     alert(`my name is exo`);
// }

// console.log(typeof sayName1);
// sayName1('Exo');


// function sayName0 (name) {
//     alert(`my name is ${name}`);
// }

// console.log(typeof sayName0);
// sayName0('Exo');

// function calc (a, b){
//     console.log(a);
//     console.log(b);
//     return a + b;
// }

// var y = calc(30, 40);

// console.log(y);

// var b = 10;

// function f (){
//     b = 20;
// }
// f();
// console.log(b);

// function f (a, b, c){
//     alert(a);
//     console.log(b + c);
// }

// f(40, 7, 10, 50, 60);


// var max = Math.max(7, 9, 20, -5);
// console.log(max);

// var result = Math.floor(4.2);
// console.log(result);


// function floor (number){
//     if (number === null ){
//         alert('try again');
//         return;
//     } else if (number === undefined){
//         alert('try again');
//         return;
//     }else {
//         console.log(y);
//     }
    
//     return number - (number % 1);
// }
// var y = floor(452.2);

// console.log(y);



// alert(0.1 + 0.2 === 0.30000000000000004);



// function round (number){
//     if (number % 1 >= 0.5) {
//         return number - (number % 1) + 1;
//     } else {
//         return number - (number % 1);
//     }
// }

// var y = round(4.7);
// console.log(y);


// var arr = new Array('3');

// console.log(arr.length, arr);



var minNum = -Infinity;

function min(arr){
    for (var i = 0; i < arr.length; i++){
       if (minNum < arr[i]){
           minNum = arr[i];
       } 
    }

    return;
}

min([4, -40, 8]);
var minNum = min([4, 7, 9, -10]);
console.log(minNum);