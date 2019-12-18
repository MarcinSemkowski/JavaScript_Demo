var cards = ["ciri.png","gerald.png","jaskier.png","jaskier.png","iorweth.png","triss.png","gerald.png",
            "yen.png","ciri.png","triss.png","yen.png","iorweth.png"];

//alert(cards[4]);


//console.log(cards);

var c0 = document.getElementById("c0");

c0.addEventListener("click",function() { revealCard(0); });



function revealCard(nr){
    alert(nr);
}