function toCamelCase(str){
  if(str.length == 0){ return str; }
  var words = str.split(/-|_/);

  return words.map(function(w, i){
    return i == 0 ? w : w[0].toUpperCase() + w.slice(1);
  }).join("");
}