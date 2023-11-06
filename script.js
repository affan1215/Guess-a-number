let computerGuess;
let userGuess=[];
let userGuessUpdate =document.getElementById("textOutput");
let  userNumberUpdate = document.getElementById("inputBox");
let start =new Audio('tense.mp3');
let win =new Audio('win.mp3');
let loose =new Audio('loose 2.wav');
let click =new Audio('click.mp3');
const init=() =>{
    computerGuess = Math.floor(Math.random()*100);
    // console.log(computerGuess);
    document.getElementById('newGameButton').style.display="none";
    document.getElementById('gameArea').style.display="none";
};
const startGame=()=>{

    document.getElementById('gameArea').style.display="block";
    document.getElementById('welcomeScreen').style.display="none";
    start.play();
}
//reload new page
const newGameBegin=()=>{
    window.location.reload();
    start.play();
}
//start new Game 
const startNewGame =()=>{
    document.getElementById('newGameButton').style.display="inline";
    userNumberUpdate.setAttribute("disabled",true);
   
}

// main logic
 const compareGuess=()=>{
    const userNumber =Number(document.getElementById("inputBox").value);
    userGuess= [...userGuess,userNumber];
    document.getElementById("guesses").innerHTML =userGuess;
    click.play();
    //check the value low or high
        if(userGuess.length <maxGuess)
    {

        
    if(userNumber >computerGuess){
        userGuessUpdate.innerHTML="Your Guess is High 🤨";
        userNumberUpdate.value="";
    }
    else if(userNumber <computerGuess){ 
        userGuessUpdate.innerHTML="Your Guess is Low 😯";
        userNumberUpdate.value="";
    }else{
        userGuessUpdate.innerHTML=`Your Won😍 <br> Correct Number was ${computerGuess}`;
        userNumberUpdate.value="";
        startNewGame();
        win.play();
    }}
    else{
        if(userNumber >computerGuess){
            userGuessUpdate.innerHTML=`You Loose ! <br> Correct Number was ${computerGuess}`;
            userNumberUpdate.value="";
            startNewGame();
            loose.play();
        }
        else if(userNumber <computerGuess){ 
            userGuessUpdate.innerHTML=`You Loose ! <br> Correct Number was ${computerGuess}`;
            userNumberUpdate.value="";
            startNewGame();
            loose.play();
        }else{
            userGuessUpdate.innerHTML=`Your Won 😍 <br> Correct Number was ${computerGuess}`;
            userNumberUpdate.value="";
            startNewGame();
            win.play();
        }

    }
    document.getElementById("attempts").innerHTML=userGuess.length;
 }
const easyMode =()=>{
 startGame();
 maxGuess=10;
}
const hardMode =()=>{
 startGame();
 maxGuess=5;
}