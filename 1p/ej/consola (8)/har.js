//har
console.log("Inserte n: ");
let n=process.openStdin();
n.addListener("data",function(n){
    console.log("\n1");
    for(let i=2;i<=n;i++){
        console.log("1/"+i);    
    }
});
