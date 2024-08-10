let user_score=0
let comp_score=0
const message=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const computerScorePara=document.querySelector("#comp-score")

const genComputerChoice =()=>{
let options=["rock","paper","scissor"];
let randIdx=Math.floor(Math.random(options)*3);
return comp_choice=options[randIdx];
}

const showWinner=(userWin,userChoice,computer)=>{
    if(userWin){
        user_score++;
        userScorePara.innerText=user_score;
        console.log("you win");
        message.innerText=`you win ,your ${userChoice} beats ${computer}`;
        message.style.backgroundColor = "green"; 
    }else{
        console.log("you loose");
        comp_score++;
        computerScorePara.innerText=comp_score;
        message.innerText=`you loose, ${computer} beats your ${userChoice}`;;
        message.style.backgroundColor = "red"; 
    }
}


const choices=document.querySelectorAll(".choice")
 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice)
    })
})

const gamedraw= ()=>{
    console.log("game is draw");
    message.innerText="game was draw play again"
    message.style.backgroundColor = "orange";
}

const playgame=(userChoice)=>{
    console.log("user choice =",userChoice);

    const computer=genComputerChoice();
    console.log("computer choice =",computer);

    if(userChoice===computer){
        return gamedraw();
    }else{
        let userWin =true;
          if (userChoice === "rock"){
            userWin = computer==="paper"?false:true;
          }else if(userChoice=="paper"){
            userWin= computer==="scissor"?false:true;

          }else{
            userWin = computer==="rock"?false:true;
          }
         showWinner(userWin,userChoice,computer);
    }

    
}
