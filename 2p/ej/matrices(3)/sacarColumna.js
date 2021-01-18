var array = [["a", "b", "c"],["a", "b", "c"],["a", "b", "c"]]

var x = array.map(function(val) {
  return val.slice(0, -1);
});

console.log(x);