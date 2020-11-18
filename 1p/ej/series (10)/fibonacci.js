
function fibonacci(){
var limite = 10;
	var fibo = [0,1];
    console.log(fibo[1]);
	for(i=2; i <= limite; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		console.log(fibo[i]);	
    }
}
fibonacci();
