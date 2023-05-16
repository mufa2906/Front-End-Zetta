// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  let temp=0;
  for (let i = 0; i < input.length-1; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j]< input[j-1]) {
        temp=input[j-1];
        input[j-1] = input[j];
        input[j] = temp;
      }
    }
  }

  if(input.length % 2 == 0) {
    return (input[(input.length/2)-1] + input[(input.length/2)])/2 
  }
  else {
    return input[(input.length-1)/2];
  }
}

console.log(result(input));