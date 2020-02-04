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
//     function castomMath(){var min = -Infinity;
//         for (var i = 0; i < arr.length; i++){
//             if (min > arr[i]) {
//                 min = arr[i];
//             }
//         }
//     }
//     return max, min;     
// }


// console.log(castomMath(arr));
// console.log(Math.max());
// console.log(Math.min());
// console.log(Math.abs());
// console.log(Math.floor());
// console.log(Math.round());



//3

var nums = [-12, 36, 5, 75, 12];
var length = nums.length
var sortedArray = [];

function sortArray(arr){
    var min = arr[0];
    var position = 0;
    for(var i = 0; i < arr.length;i++){
        if(min > arr[i]){
            min = arr[i];
            position = i
        }
    }
    sortedArray.push(min);
    arr[position] = null;
    var newArray = []
    for(var i = 0; i < arr.length;i++){
        if(Number(arr[i])){
            newArray.push(arr[i])
        }
    }
    if(sortedArray.length === length){
        return sortedArray;
    } else return sortArray(newArray);

}

console.log(sortArray(nums));
console.log(sortArray(nums));














