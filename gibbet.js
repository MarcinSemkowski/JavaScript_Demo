var sentence = "Bez pracy nie ma kołaczy";
sentence = sentence.toUpperCase();
var lengthSentence = sentence.length;
var ile_skuch = 0; 
var sentence1 = "";


for(i=0;i<lengthSentence; i++)
{
    if(sentence.charAt(i) == " "){
        sentence1 = sentence1 + " ";
    }else{
      sentence1 = sentence1 + "-";
    }
}




function writeSentence(){
    
    document.getElementById("board").innerHTML = sentence1;
       
    
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";


function start(){
var tresc_diva = "";

for(i =0; i <=34; i++){
    var element = "lit" + i;
    tresc_diva = tresc_diva + '<div class="letter" onclick="check('+i+')"  id="'+ element +'" >'+ letters[i] +'</div>';
    if(i +1 % 7 == 0){
         tresc_diva = tresc_diva + '<div style = "clear:both;"></div>';
    }
    

}    
    
document.getElementById("alphabet").innerHTML = tresc_diva; 

writeSentence();     
    
}


String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}







function check(nr){
    
var hit = false;
    
for(i=0; i < lengthSentence; i++){
  if(sentence.charAt(i) == letters[nr]){
    
    sentence1 = sentence1.ustawZnak(i,letters[nr]);
      hit = true;
  }
}
 if(hit == true){
    var element = "lit" + nr;
     document.getElementById(element).style.background ="#003300";
     document.getElementById(element).style.color ="#00C000";
     document.getElementById(element).style.border ="#3px solid #00C000";
     document.getElementById(element).style.cursor ="default";
     
     writeSentence(); 
 }else{
     var element = "lit" + nr;
     document.getElementById(element).style.background ="#330000";
     document.getElementById(element).style.color ="#C00000";
     document.getElementById(element).style.border ="#3px solid #C00000";
     document.getElementById(element).style.cursor ="default";
     document.getElementById(element).setAttribute("onclick",";");
  ile_skuch++;
     var image = "img/s" + ile_skuch + ".jpg";
     document.getElementById("gibbet").innerHTML = '<img src="' + image + '" alt="" />';
 
 }  
    
if(sentence == sentence1){
    document.getElementById("alphabet").innerHTML = "Tak Jest Podano Prawidłowe Hasło: " + sentence +  
        '<br/><br/> <span class="reset" onclick="location.reload()">Jescze Raz ? </span>';
}
    if(ile_skuch >= 9){
        document.getElementById("alphabet").innerHTML = "Przegrana Prawidłowe Hasło: " + sentence +  
        '<br/><br/> <span class="reset" onclick="location.reload()">Jescze Raz ? </span>';
    }
    
}
