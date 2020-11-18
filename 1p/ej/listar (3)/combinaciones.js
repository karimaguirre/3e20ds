function getCombinations() {
    var S=[3,1,4,2,3];
    var result = [];
    var f = function(prefix, S) {
      for (var i = 0; i < S.length; i++) {
        result.push(prefix + S[i]);
        f(prefix + S[i], S.slice(i + 1));
      }
    }
    f('', S);
    console.log( result);

  }
  getCombinations();
