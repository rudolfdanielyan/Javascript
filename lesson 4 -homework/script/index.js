//homevork

// getMax (5, -10, 200, 3);
// ete mek tiv grvi, alert,
// gtnel maximal arjeq@,
// ete baci tvic ayl arjeq lini , alert!
// NaN isNaN(Nan).
// Infinity === Infinity
// true
// isFinite(10);
// true
// getMax(5)//


// sarqel konstructor erb var obj = new F();
// F(); ete kanchenq arandzin aranc new-i kanchi alert!

// var castomMath-i vra vori vra klinen  Abs, floor, max, min, round objetner@

// sortavorman xndirn el grel

//1
// var arr = [5, 10, 500,];

// function getMax(arr){
//     var max = arr[0];
//     for (var i = 0; i < arr.length; i++){
//         if (!Number(arr[i])){
//             return alert('not a number')
//         } else if(arr.length === 1){
//             return alert('one number here')
//         } else if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(getMax(arr));


//2

// var arr = [60, 36, -40, 12, 24];

// function castomMath(arr){
//     var max = arr[0];
//     for (var i = 0; i < arr.length; i++){
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     
//     return max;     
// }


// console.log(castomMath(arr));


//3

// var nums = [-12, 36, 5, 75, 12];
// var length = nums.length
// var sortedArray = [];

// function sortArray(arr){
//     var min = arr[0];
//     var position = 0;
//     for(var i = 0; i < arr.length;i++){
//         if(min > arr[i]){
//             min = arr[i];
//             position = i
//         }
//     }
//     sortedArray.push(min);
//     arr[position] = null;
//     var newArray = []
//     for(var i = 0; i < arr.length;i++){
//         if(Number(arr[i])){
//             newArray.push(arr[i])
//         }
//     }
//     if(sortedArray.length === length){
//         return sortedArray;
//     } else return sortArray(newArray)
// }

// console.log(sortArray(nums));





//lesson

// function f(){
//     console.log(this.age);
// }

// var obj = {
//     age : 100,
//     f : function(){
//         f();
//     }
// }

// obj.f();


//

// function F(name){
//     this.myName = name;
// }

// var o = new F('some Name');
// console.log(o);

// // // F('some text!');
// // // console.log(myName);



//
// // var obj = {
// //     f: F
// // }

// function F(name){
//     // if(this === window || !(this instanceof F)){
//     //     throw 'f is a constructor';
//     // }
//     if(!new.target){
//         throw 'f is a constructor';
//     }

//     this.myName = name;
// }

// // obj.f();
// var o = new F();
// o.f = F;
// o.f();


//

// var arr = [-7, 200, 30, 11, -2, 100];

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] > arr[i+1]){
//         var container = arr[i]
//         arr[i] = arr[i+1];
//         arr[i+1] = container;
//         i -= 2;
//     }
// }

// console.log(arr);


//

// var arr = [];
// arr.y = 10;
// console.log(arr.y);


//

// function F(age){
//     this.age = age;
// }
// F.y = 10;
// F.prototype.x = 200;
// var f = new F(100);
// console.log(f.age);
// console.log(f.x);

//

// Array.prototype.customPush = function(value){
//    this.push(value);
// }
// var a = [];
// a.customPush(5);
// console.log(a);

//

// Array.prototype.customPush = function(){    
//     for (var i = 0; i < arguments.length; i++){        
//         this[this.length] = arguments[i];
//     }
// }
// var a = [];
// a.customPush(11, 8, 6, 5, {},);
// console.log(a);

//
var y;
var x = (y = 10, alert(1), 3)

console.log(x);
console.log(y);

//homework

//customPop();
//customShift();
//customUnshift();

