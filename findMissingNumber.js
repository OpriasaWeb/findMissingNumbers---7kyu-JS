// DESCRIPTION:
// You will get an array of numbers.

// Every preceding number is smaller than the one following it.

// Some numbers will be missing, for instance:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:

// [-1,0,2,3,4]

function findMissingNumbers(arr){
  
  var missingArr = [];
  
  let minNum = Math.min(...arr); // first number in array
  let maxNum = Math.max(...arr); // last number in array
  
//   indexOf
  for(let i = minNum; i < maxNum; i++){
    if(arr.indexOf(i) < 0){
      missingArr.push(i);
    }
  }
  
  return missingArr;
  
}

console.log(findMissingNumbers([-3,-2,1,5]));