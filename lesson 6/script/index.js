

// var test = [15, 25, true, null, 625, 12];
// var testCopy = test.slice(1, 3);
// console.log(testCopy);
// console.log(test.concat([11, 22]));
// console.log(test.join("$$"));
// console.log(test.reverse());



// //
// Array.prototype.customUnshift = function(){    
//     for (var i = 0; i < arguments.length; i++){  
        
//         this[0] = arguments[0];
//         this.slice(arguments[0]);
//     }
    
//     // this.unshift(5);
// }
// var a = [16, 441, 28, 41];
// a.customUnshift(1);
// console.log(a);


// //

// Array.prototype.customShift = function (){
//     var firstElem = this[0];
//     // this.shift();
//     this.splice(0, 1);
    
//     return firstElem;
// }

// var test = [1111, true, null, 25, 15];

// var t = test.customShift();

// console.log(test);
// console.log(t);


// //

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
// Array.prototype.myJoin = function(value){
//     var result = '';
//     for(var i = 0; i < this.length; i++){
        
//         if(i !== this.length - 1){
            
//             result += `${this[i]}${value}`;
//         } else {
//             result += this[i];
//         }        
//     }

//     return result;
// }

// var arr = [1, 4, 10];
// arr.myJoin();
// console.log(arr.myJoin('*'));

//
// Array.prototype.myConcat = function(arr){
//     var result = [];
//     for(var i = 0; i < this.length; i++){
//         result.push(this[i]);
//     }

//     for(var i = 0; i < arr.length; i++){
//         result.push(arr[i]);
//     }
//     return result;
// }

// var arr = [1, 2, 3];


// console.log(arr.myConcat([10, 26, 36]));

//
// Array.prototype.mySlice = function(start = 0, end){
//     var result = [];
//     for (var i = start; i < (end || this.length); i++){//ete end@ chka @ndunum e this.length@
//         result.push(this[i]);
//     }   
    
//     return result;
// }

// var arr = [5, 6, 200, 80, 90];
// console.log(arr.mySlice());


//

// function mySlice(start, end, value) {
//     var result = [];
//     for(var i = start; i < (end || arr.length); i++){
//         result.push(arr[i]);
//     }

//     return result;
// }

// mySlice([1, 10, 30, 5, 66], 1, 2);


// 
var date = new Date();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.setDate(5));
console.log(date.getDate());
console.log(date.setFullYear(1993, 1, 3));

//homework
//sarqel slice, Splice ev random tvov F();


//
Array.prototype.mySplice = function(start = 0, end) {
    var result = [];
    for(var i = start; i < (end || this.length); i++) {
        result.pop(arr[i]);
    }

    return result;
}


var arr = [5, 6, 200, 80, 90];
console.log(arr.mySplice([1, 4]));


//
function myRandom(min, max) {
    var result = [];
   for (var i = 0; i < arr.length; i++) {
    result = arr[i];
} 
return result * (max - max) + min;       
}

console.log(myRandom(1, 5));
