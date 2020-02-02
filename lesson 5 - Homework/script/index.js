//homevork

//
Array.prototype.customUnshift = function(){    
    for (var i = 0; i < arguments.length; i++){  
        
        this[0] = arguments[0];
        this.slice(arguments[0]);
    }
    
    // this.unshift(5);
}
var a = [16, 441, 28, 41];
a.customUnshift(1);
console.log(a);


//

Array.prototype.customShift = function (){
    var firstElem = this[0];
    // this.shift();
    this.splice(0, 1);
    
    return firstElem;
}

var test = [1111, true, null, 25, 15];

var t = test.customShift();

console.log(test);
console.log(t);


//

var arr = [-7, 200, 30, 11, -2, 100];

for(var i = 0; i < arr.length; i++){
    if(arr[i] > arr[i+1]){
        var container = arr[i]
        arr[i] = arr[i+1];
        arr[i+1] = container;
        i -= 2;
    }
}

console.log(arr);


