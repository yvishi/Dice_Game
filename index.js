var num1=Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src","images/dice"+num1+".png");
var num2=Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png");
if(num1>num2){
    document.querySelector("h1").innerHTML="<img src='images/flag.png' alt='flag' height='100'> Player 1 Wins!";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML="Player 2 Wins! <img src='images/flag.png' alt='flag' height='100'>";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

