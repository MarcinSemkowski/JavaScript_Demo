var sentence = "Bez pracy nie ma kołaczy";


function writeSentence(){
    
    document.getElementById("board").innerHTML = sentence;
       
    
}

window.onload = writeSentence;