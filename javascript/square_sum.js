// Complete the squareSum method so that it squares 
// each number passed into it and then sums the 
// results together.

// For example:

// squareSum([1,2, 2]); #=>  9

function squareSum(numbers){
  return numbers.reduce(function(sum, n) { 
    return sum + (Math.pow(n, 2)); 
  }, 0);
}