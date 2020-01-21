/* var a = +prompt('enter number');
var b = +prompt('enter number');
var c = +prompt('enter number');

if(a > b && a > c) {
    alert(a);
} else if(b > a && b > c) {
    alert(b);
} else {
    alert(c);
} */

/* var bool;
var number = +prompt('Enter number');

var hundreds = (number - number % 100) / 100;
var ones = number % 10;
var tens = (number % 100 - ones) / 10;
console.log(hundreds, tens, ones);

if (hundreds + tens === ones) {
    alert(true);
} else {
    alert(false);
} */

/* var text = 'some text';
console.log(text.length);

var number = prompt('Enter number');
var hundreds = +number[0];
var tens = +number[1];
var ones = +number[2];

if (hundreds + tens === ones) {
    alert(true);
} else {
    alert(false);
}
 */

/* console.log('5' >= '7')
 */

/* for (var y = 0; y < 50; y++){
    if(y % 7 === 0){
        console.log(y);
    }
} */

/* var number = +prompt('Enter number');
var result = 1;

for (var y = 1; y <= number; y++) {
    if(y % 7 === 0){
        result *= y;
        console.log(y, result);
    }
}

console.log(result); */

//console.log(0 / 0);
//console.log(0 / 1);
//console.log(1 / 0);
//console.log(Infinity / 0);
//console.log(0 / Infinity);
//console.log(Infinity * 0);

/* for (var y = 0; y < 10; y+=1){
    console.log(y);
} */


/* for (var y = 0; y < 50; y+= 2) {
    console.log(y);
} */

/* for (var y = 0; y < 50; y++) {
    if (!(y % 2))
    console.log(y);
} */

/* for (var y = 50; y >= 0; y--) {
    console.log(y);
    if(y ===20){
        break;
    }
} */
/* for (var y = 50; y >= 0; y--) {
    if(y ===48){
        continue;
    }
    console.log(y);
} */


/* var arr = ['some text', 755, true];

console.log(arr);
console.log(typeof arr);
console.log(arr[0]); */

/* var arr = [45, 76, -102, 7000]; */

/* for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* arr[10] = 1;
console.log(arr); */

/* var y = arr.push(355);
var x = arr.pop();

console.log(y, arr); */

/* arr.shift();
arr.unshift(1000);

console.log(arr); */

// var arr = [45, 76, -102, 7000, -8, 11];
/* var result = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        result += arr[i] ** 2;        
    }
} */

// console.log(result);

/* var evenCount = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenCount++;
}

console.log(evenCount); */

/* var mresult = 1;
var additionresult = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        mresult *= arr[i];
        additionresult += arr[1];
    }
}

console.log(mresult);
console.log(additionresult); */

/* var arr = [45, 76, -102, 7000, -8, 11, 100, 13];
var result = 0;
var oddCount = 0;
var oddMultipication = 1; */
//var oddAddition = 0;

/* for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        oddCount++;
        oddAddition += arr[i];
    }
}

result = oddAddition / oddCount;

console.log(oddCount);
console.log(oddAddition);
console.log(result); */

/* for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        oddCount++;
        oddMultipication += (arr[i] * arr[i]);
    }
}

result = oddMultipication / oddCount;

console.log(oddCount, oddMultipication, result); */
/* 
var y = 5;
var a = y;
y = 20;

console.log(a);

var masiv0 = [2, 3];
var masiv1 = masiv0;
masiv0[0] = 1000;
console.log(masiv1); */

var arr = [4, 7, 10, 20];

console.log(arr[arr.length - 1]);