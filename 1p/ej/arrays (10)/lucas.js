
function lucas(){
    var lucas = [];
    var n1 = 2;
    var n2 = 1
    var n3;
        for(var i=2; i<= 11;i++){
            lucas.push(n2)
            n3 = n2;
            n2 += n1;
            n1 = n3;
    }
    console.log(lucas);
    }
lucas();
