
function factory(multiplier) {
    
    return function (array) {
        return array.map(num => num * multiplier);
    };
}

// Example Usage
const multiplyByFive = factory(5);
console.log(multiplyByFive([1, 3, 3])); // [5, 10, 15]

const multiplyByTwo = factory(2);
console.log(multiplyByTwo([4, 5, 6])); // [8, 10, 12]

// Result By for loop


// let a= [1,2,3]
// var result = []
// function fact(num) {
//     for (let index = 0; index < a.length; index++) {
//         var sum = num * a[index];  
//         result.push(sum);      
//     }
//     return result;
// }

// var fact5 = fact(5);
// console.log(fact5);

// var fact4 = fact(4);
// console.log(fact4);

