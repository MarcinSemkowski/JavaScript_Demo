var cards = ["ciri.png","gerald.png","jaskier.png","jaskier.png","iorweth.png","triss.png","gerald.png",
            "yen.png","ciri.png","triss.png","yen.png","iorweth.png"];

//alert(cards[4]);


//console.log(cards);

var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");

var c12 = document.getElementById("c12");


c0.addEventListener("click",function() { revealCard(0); });
c0.addEventListener("click",function() { revealCard(1); });
c0.addEventListener("click",function() { revealCard(2); });
c0.addEventListener("click",function() { revealCard(3); });

c0.addEventListener("click",function() { revealCard(4); });
c0.addEventListener("click",function() { revealCard(5); });
c0.addEventListener("click",function() { revealCard(6); });
c0.addEventListener("click",function() { revealCard(7); });

c0.addEventListener("click",function() { revealCard(8); });
c0.addEventListener("click",function() { revealCard(9); });
c0.addEventListener("click",function() { revealCard(10); });
c0.addEventListener("click",function() { revealCard(11); });
c0.addEventListener("click",function() { revealCard(12); });


var oneVisible = false;
var turnConuter = 0;


function revealCard(nr){
    var photo  "url(img/" + cards[nr] + ")";
    
    
}