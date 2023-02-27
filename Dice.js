var rn1=Math.floor(Math.random()*6)+1;
var randomImg1="DiceImgs/Dice"+rn1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg1);
var rn2=Math.floor(Math.random()*6)+1;
var randomImg2="DiceImgs/Dice"+rn2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);
if(rn1>rn2)
{
    document.querySelector("h1").innerHTML="🥇Player 1 wins";
}
else if(rn1<rn2)
{
    document.querySelector("h1").innerHTML="Player 2 wins 🥇";
}
else{
    document.querySelector("h1").innerHTML="DRAW 🤝"
}