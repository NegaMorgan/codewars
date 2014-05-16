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