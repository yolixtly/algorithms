'use strict';
$(document).ready(function() {
console.log('Happy Coding Yolixtly!');

//ex 1 

/*Option 1*/

function solution(number){ 
var numbers = []; 
for(var i = 0; i < number; i++){ 
if(i % 3 === 0 || i % 5 === 0){ 
numbers.push(i); 
};
};
var total = 0;
for(var i in numbers) {
total += numbers[i];
}
return total;
};

console.log(solution(10));
});

/*Option 2*/

function solution2(number){
  var total = 0;
  
  for (var i=0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i; 
    }
  }
  
  return total;
}
console.log(solution2(10));

// ex 2