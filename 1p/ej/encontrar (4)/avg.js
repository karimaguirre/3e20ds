function avg (){


var S=[3,1,4,2,3];
var total = 0;
    for(var i = 0; i < S.length; i++) {
        total += S[i];
    }

    var avg = total / S.length;
    console.log(avg);



}
avg();