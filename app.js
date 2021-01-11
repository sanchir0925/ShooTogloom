
var diceDOM= document.querySelector('.dice');
var activePlayer;
var scores;
var roundScore;
var isNewGame;
document.getElementById('score-0').textContent="0";// id-r element haih func queryselector . # olon songolttoi aria udaan func6
function initGame(){
    // тоглогчийн оноо хадгалах, шооны оноог хадгалх хувьсагчид хэрэгтэй.
activePlayer=0;
isNewGame=true;
// toglogchdiin shoonii buuh onoog hadgalah huwisagch.
scores = [0,0];
// toglogchiin eeljiin huwisagch;
roundScore = 0;
activePlayer=0;
diceDOM.style.display="none"; //document-s class haij olood style css iin dice class--iin display property-g none buyu bhgui gj temdeglele/
// program ehlehed belteg 
window.document.getElementById('score-0').textContent="0";
window.document.getElementById('score-1').textContent="0";
document.getElementById('current-0').textContent="0";
document.getElementById('current-1').textContent="0";
document.getElementById('name-0').textContent="player-1";
}
function switchToNextPlayer(){
    roundScore=0;
    // ulaan tsegiig shiljvvleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // shoog tvr hugatsaand alga bolgon
    diceDOM.style.display="none"; 
    // toglogchiin eeljiig solino. herew idwehtei toglogch 0 bwl 1 bolgon ugui bol 1 bolgono.
    if(activePlayer===0) {        
        activePlayer=1;}
    else {activePlayer=0;      
   }
}
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(isNewGame===true){
    var diceNumber = Math.floor(Math.random()*6+1);//uur haanch ashiglahgui uchiraas anonymous func ashiglaj bolno
    diceDOM.style.display="block"; //block haruulah gesen tvlhvvr ug haruulahgui bol oorchilj bolohgui yagd gwl none gd haachihsan bga shv!
    diceDOM.src="dice-"+diceNumber+".png";
    console.log("diceNumbet"+ diceNumber);
    //buusan too 1s yalgaatai bol idwehtei toglogchiin haragdah onoog nemegdvvlne.
    if(diceNumber!==1){ // togloj bh uein onoo roundScore.
        roundScore+=diceNumber;// diceNumber tuhain agshind shoonii buuh too.
        document.getElementById("current-"+activePlayer).textContent=roundScore;
    }
    else{ 
        document.getElementById("current-"+activePlayer).textContent=0;        
        // toglogchiin eeljiig shiljvvlne
       switchToNextPlayer();
        
    }
  
    }else{
        alert("Тоглоом дууссан байна. Та NEW GAME товчийг дарж тоглоом шинээр эхлүүлнэ үү!");
    }
})
// hold button ajilgaatai bolgii
document.querySelector(".btn-hold").addEventListener("click",function(){
    if(isNewGame===true){
// ug toglogchiin onoog n niit onoon dr nemj ogno 
scores[activePlayer]=scores[activePlayer]+roundScore;
//id gaar select hgd delgets deerh onoog olno

document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
//eeljiin onoog 0 bolgon
document.getElementById('current-'+activePlayer).textContent=0;
//toglogchiin eeljiig solino
  // toglogch hojson esehiig shalgana
  if(scores[activePlayer]>=10){
      isNewGame=false;
      document.getElementById('name-'+activePlayer).textContent="WINNER!";
      document.getElementById('current-'+activePlayer).textContent=0;
  }
  else{
    switchToNextPlayer();
  }
    }else{
        alert("Тоглоом дууссан байна. Та NEW GAME товчийг дарж тоглоом шинээр эхлүүлнэ үү!");
    }
})
document.querySelector(".btn-new").addEventListener("click",initGame);