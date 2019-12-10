        
        let data = new Date(this._inputData.value.replace(/-/g,',')); 
        if (indice == 1) { 
            return item -1;
        }
        return item;
        
        using mode of 2 the 1ft position of the array is 0 ... 0 % 2 is 0 so no actions on this position 
        the 2sd position is 1 ... 1 % 2 is 1 item - 1
        the 3tr position is 2 ... 2 % 2 is 0 so no actions on this position 
        when you have just one instruction to the arrow function you can ocult the block 


You have too create a new list with the same quantity of numbers, but if is a odd number have to be the double in the new array. let numeros = [3,2,11,20,8,7];


let numbers = [3,2,11,20,8,7];
let newNumbers = [];

numbers.forEach(item => {

    if(item % 2) { // just enter in the IF with zero as awnser 
        newNumbers.push(item * 2);
    } else {
        newNumbers.push(item);
    }
});
console.log(newNumbers);


... spread operator - https://www.youtube.com/watch?v=iLx4ma8ZqvQ

/* Spread Operator / Rest Operator */

// add the elements of an existing array into a new array
var certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries']; 
var certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);

// pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) { 
	console.log(x+y+z)
}
var args = [0, 1, 2, 3];
addThreeNumbers(...args);

// copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log(arr);
console.log(arr2);


// concatenate arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
//arr1.concat(arr2);
arr1 = [...arr1, "freeCodeCamp", ...arr2];
console.log(arr1);


// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); 
console.log(arr)


Interpolation -> console.log(`A idade de ${nome} é ${idade}`);