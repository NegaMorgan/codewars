// Write a function that will find all the anagrams of 
// a word from a list. You will be given two inputs a 
// word and an array with words. You should return an 
// array of all the anagrams or an empty array if there 
// are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', racer']

// anagrams('laser', ['lazing', 'lazy', 'lacer'] => []


// first solution

function anagrams(word, words) {
  matches = [];
  words.forEach( function(w) { 
    if(w.split("").sort().join("") === word.split("").sort().join("")){
      matches.push(w);
    }
  });
  return matches;
}

// second solution

function anagrams(word, words) {
  return words.filter( function(w) { 
    return w.split("").sort().join("") === word.split("").sort().join("");
  });
}