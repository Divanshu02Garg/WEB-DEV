// is prime
let n = 11;
let flag= 1;
for(let i=2; i*i<=n; i++){
    if(n%i==0){
      //  isPrime= false;
     flag=0;
     break;  
    }
}
if(flag==1){
    console.log("number is prime");
}else{
    console.log("number is not prime");

}