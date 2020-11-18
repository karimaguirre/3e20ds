console.log(powerset([3,1,4,2,3]));

function powerset(set, result) {
  if (!result) {
    var begin = true;
    result = [];
  }
  if (set.length) {
    result = set.reduce(function(result, current, index, array) {
      var subset = array.slice(0);
      result.push(JSON.stringify(subset.splice(index, 1)));
      powerset(subset, result);
      return result;
    }, result);
  }
  result.push(JSON.stringify(set));
  if (begin) {
    result = result
      .reduce(function(result, current) {
        if (result.indexOf(current) == -1) {
          result.push(current);
        }
        return result;
      }, [])
      .map(function(current) {
        return JSON.parse(current);
      });
  }
  return result;
}


