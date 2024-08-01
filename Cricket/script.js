
let score=0;
let target=0;
let test=0;
let secondScore=0;
const buttonStart = document.querySelector("#buttonStart");
const buttonDiv = document.querySelector("#buttonDiv");
const twoButton = document.querySelector("#twoButton");
const batting=document.querySelector("#batting");
const bowling=document.querySelector("#bowling");
const firstBatting=document.querySelector("#firstBatting")
const h1=document.querySelector("#h1")
const totalScore=document.querySelector("#score")
const playerOut=document.querySelector("#playerOut")
const nextInningTarget=document.querySelector("#nextInningTarget")
const playerOutButton=document.querySelector("#playerOutButton")
const showTarget=document.querySelector("#target")
const win=document.querySelector("#win")
const lose=document.querySelector("#lose")
const tie=document.querySelector("#tie")
const C1=document.querySelector("#C1")
const C2=document.querySelector("#C2")
const C3=document.querySelector("#C3")
const C4=document.querySelector("#C4")
const C5=document.querySelector("#C5")
const C6=document.querySelector("#C6")
const reStart=document.querySelector("#restart")
const buttonRestart=document.querySelector("#buttonRestart")

buttonStart.onclick = goTo;

function goTo() {
  buttonDiv.style.display="none";
  twoButton.style.display = "block";
  buttonRestart.style.display="block";
  batting.onclick= goBatting;
  bowling.onclick= goBowling;
}

function goBatting(){
  twoButton.style.display = "none";
  firstBatting.style.display="block";
}

function goBowling(){
  twoButton.style.display = "none";
  firstBatting.style.display="block";
  h1.innerText="Bowling"
}

function youPlaying(run){
  
    C1.style.backgroundColor='';
    C2.style.backgroundColor='';
    C3.style.backgroundColor='';
    C4.style.backgroundColor='';
    C5.style.backgroundColor='';
    C6.style.backgroundColor='';

    C1.style.color='';
    C3.style.color='';
    C4.style.color='';
    C5.style.color='';
    C2.style.color='';
    C6.style.color='';
  if(test!==-1){
  let compRun=Math.floor(Math.random()*6)+1;
  if(compRun!=run)
  {
    score+=run;
    totalScore.innerText=score;
    compRun.toString();


    if(compRun==1){
      C1.style.backgroundColor="green";
      C1.style.color="white";}
    else if(compRun==2){
      C2.style.backgroundColor="green";
      C2.style.color="white";}
    else if(compRun==3){
      C3.style.backgroundColor="green";
      C3.style.color="white";}
    else if(compRun==4){
      C4.style.backgroundColor="green";
      C4.style.color="white";}
    else if(compRun==5){
      C5.style.backgroundColor="green";
      C5.style.color="white";}
    else{
      C6.style.backgroundColor="green";
      C6.style.color="white";}



  }
  else{

    firstBatting.style.display="none";
    playerOut.style.display="block";
    target=score;
    nextInningTarget.innerText=target;
    playerOutButton.onclick=secondBowling;
  }
}
else{

  let compRun=Math.floor(Math.random()*6)+1;
  if(compRun!=run && secondScore<target){
  secondScore+=run;
  totalScore.innerText=secondScore;
  
  if(compRun==1){
    C1.style.backgroundColor="green";
    C1.style.color="white";}
  else if(compRun==2){
    C2.style.backgroundColor="green";
    C2.style.color="white";}
  else if(compRun==3){
    C3.style.backgroundColor="green";
    C3.style.color="white";}
  else if(compRun==4){
    C4.style.backgroundColor="green";
    C4.style.color="white";}
  else if(compRun==5){
    C5.style.backgroundColor="green";
    C5.style.color="white";}
  else{
    C6.style.backgroundColor="green";
    C6.style.color="white";}

  }
  else{
    if(compRun==run){
      firstBatting.style.display="none";
      win.style.display="block";
      
    }
    if(secondScore>target){
      firstBatting.style.display="none";
      lose.style.display="block";
      
        }
    if(secondScore==target){
      firstBatting.style.display="none";
      tie.style.display="block";
     
            }
  }
}
}

function secondBowling(){
  playerOut.style.display="none";
  score=0;
  totalScore.innerText=score;
  twoButton.style.display = "none";
  firstBatting.style.display="block";
  h1.innerText="Bowling";
  targetScore.style.display="block";
  showTarget.innerText=target;
  test=-1;

}

function refreshPage() {
  location.reload();
}