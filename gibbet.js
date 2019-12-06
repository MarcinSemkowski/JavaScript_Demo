var sentence = "Bez pracy nie ma kołaczy";

var length = sentence.length;

var password1 = "";


for(i=0;i<length; i++)
{
    if(sentence.charAt(i) == " "){
        password1 = password1 + " ";
    }else{
      password1 = password1 + "-";
    }
}


function writeSentence(){
    
    document.getElementById("board").innerHTML = password1;
       
    
}

window.onload = writeSentence;