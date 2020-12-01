//Todo Event Listener for all of those buttons and find score

var userScore=0;
var compScore = 0;
var userText = document.getElementById("userScore");
var compText = document.getElementById("compScore");
var rock = document.getElementById("rockbtn");
var paper = document.getElementById("paperbtn");
var scissors = document.getElementById("scissorsbtn");
var reset = document.getElementById("reset");

function updateText(userScore,compScore){
    userText.innerHTML=`User Score : ${userScore}`;
    compText.innerHTML=`Comp Score is ${compScore}`;
}


function resetgame(){
    console.log(`Game Reset`);
    //location.reload();
    userScore=0;
    compScore=0;
    updateText(userScore,compScore);
}


function evaluate(userChoice,compChoice){

    console.log(`User Choice = ${userChoice} and Comp Choice = ${compChoice}`);
    if(userChoice==compChoice){
        console.log(`Both are same`);
       return;
    }
    var result = userChoice + compChoice;
    if(result == "rp" || result == "ps" || result=="sr")compScore++;
    else userScore++;
    updateText(userScore,compScore)
}

function generateRandom(userChoice){
    var randomNumber = Math.round(Math.random()*3);
    var compChoice;
    if(randomNumber==0)compChoice="r";
    else if(randomNumber==1)compChoice="p";
    else compChoice="s";
    evaluate(userChoice,compChoice);
}


rock.addEventListener("click",()=>{
    console.log(`Rock is clicked`);
    generateRandom(userChoice='r');
});
paper.addEventListener("click",()=>{
    console.log(`Paper is clicked`);
    generateRandom(userChoice='p');
});
scissors.addEventListener("click",()=>{
    console.log(`Scissors is clicked`);
    generateRandom(userChoice='s');
});

reset.addEventListener("click",()=>{
    resetgame();
});

