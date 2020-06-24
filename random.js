var computer=Math.floor(Math.random()*101);
var rounds= 0 ;

document.getElementById("enter").addEventListener("click",function(){
var x= document.getElementById("bar").value;
if(x>=0 && x<=100){
    document.getElementById("hnum").innerText=x;
}else{
    alert("this num isn't in the range");
}
if(x==computer){
    document.getElementById("cnum").innerText="you won";

}
else if(x<computer){
    document.getElementById("cnum").innerText="try again your number is smaller than the computer";
     rounds++;
     document.getElementById("ro").innerText=rounds;

}else{
    document.getElementById("cnum").innerText="your number is bigger than the computer";
    rounds++;
    document.getElementById("ro").innerText=rounds;
}


});

