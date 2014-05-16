// You've just recently been hired to calculate scores 
// for a Dart Board game! 

// Scoring specifications:
// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5

// If all radiuses are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radiuses 
// (can be integers and/or floats), and returns a total 
// score using the above specification.
// An empty array should return 0.

// Examples:
// scoreThrows( [1, 5, 11] ) => returns 15 
// scoreThrows( [15, 20, 30] ) => returns 0 
// scoreThrows( [1, 2, 3, 4] ) => returns 140

function scoreThrows(radiuses){
  if(radiuses.length == 0){ return 0 }
  var bonus = true;
  var score = radiuses.reduce(function(sum, radius){
    if(radius < 5){
      var points = 10;
    }else if(radius > 10){
      var points = 0;
      bonus = false;
    }else if(radius <= 10 && radius >= 5){
      var points = 5;
      bonus = false;
    }
    return sum + points;
  }, 0);
  return bonus ? score + 100 : score;
}