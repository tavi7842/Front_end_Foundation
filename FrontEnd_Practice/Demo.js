function reverse(){
    var i = prompt("En ter the number");
    var rev=0;
    var rem=0;
    while(i!=0){
         rem=i%10;
         rev=rev*10+rem;
         i=Math.floor(i/10);
    }
   document.write(rev);
   
}
