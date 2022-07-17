// ex 1: Function Times 3

var product = function(num1, num2) {
    return function(num3, num4) {
        return function(num5, num6) {
            return num1 * num3 * num5 + num2 * num4 * num6;
        }
    }
}
console.log(product(1,2)(1,1)(2,3)); 
console.log(product(10,2)(5,0)(2,3));
console.log(product(1,2)(2,3)(3,4));
console.log(product(1,2)(0,3)(3,0));

// ex 2: Fix the Code: Un-Mutating an Array

function change(x, times) {
    let newX = x.slice(); 
    for(let i = 0; i < x.length; i++) {
        let j = 1; 
        while (j <= times) {
            if (i >= j && i < x.length-j) {
                newX[i]--; 
            }
            j++; 
        }
    }
    return newX; 
}

let x = [3, 3, 3, 3, 3, 3, 3]; 
console.log(change(x, 0));
console.log(change(x, 1));
console.log(change(x, 2));
console.log(change(x, 3));

// ex 3: Metaprogramming: Making a Test Case

function createTest(a, b) {

    if (typeof(a,b) === 'number') {
         result = a + b;
         return assertEquals(a, b, result);
        
    }
    if (typeof(a, b) === 'string') {
         result = a + b;
         return assertEquals(a, b, result);
    }
    if (Array.isArray(a, b)) {
         result = a.concat(b);  
         return assertSimilar(a, b, result);
    }
 }
 
function assertEquals(a,b, result) {
    return (`Test.assertEquals(createTest(${a}, ${b}), ${result})`);
}

function assertSimilar(a, b, result) {
    return (`Test.assertSimilar(createTest(${a}, ${b}), ["${result.join('", "')}"])`); 
}

console.log(createTest(1, 1));
console.log(createTest("a", "b"));
console.log(createTest(["String"], ["String"]));


// ex 4: Backspace Attack

function erase(str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== '#') {
            newStr += str[i];
        }
        else {
            if (newStr.length > 0) {
                newStr = newStr.slice(0, -1);
            }
        }
    }
    return newStr;
}

console.log(erase("he##l#hel#llo"));
console.log(erase("major# spar##ks")); 
console.log(erase("si###t boy")); 
console.log(erase("####")); 

// ex 5: Moving Partition

function movingPartition(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length-1; i++) {
      var newArr2 = [];
      newArr2.push(arr.slice(0, i+1));
      newArr2.push(arr.slice(i + 1, arr.length));
      newArr.push(newArr2);
    }
    return newArr;
}

console.log(movingPartition([-1, -1, -1, -1]));
console.log(movingPartition([1, 2, 3, 4, 5]));
console.log(movingPartition([]));

// ex 6:Function Factory

function makePlusFunction(baseNumber) {
    return function (num) {
        return baseNumber + num;
    }
}

var plusFive = makePlusFunction(5);
console.log(plusFive(2)); 
console.log(plusFive(-8)); 

var plusTen = makePlusFunction(10);
console.log(plusTen(0)); 
console.log(plusTen(188)); 

console.log(plusFive(plusTen(0))); 
