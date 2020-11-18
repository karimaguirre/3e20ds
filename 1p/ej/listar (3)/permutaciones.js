function permutaciones () {
    var S=[3,1,4,2,3];
    let result = [];
  
    const permutar = (S, m = []) => {
      if (S.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < S.length; i++) {
          let curr = S.slice();
          let next = curr.splice(i, 1);
          permutar(curr.slice(), m.concat(next))
       }
     }
   }
  
   permutar(S)
   console.log(result);
  }

  permutaciones();