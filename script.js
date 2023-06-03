const  btn = document.getElementById("btn");
const testDiv = document.getElementById("test");
const scor = document.getElementById("scor");
const resetBtn = document.getElementById("resetBtn");

let gameChoice = ["water","gun","snake"];

let yourCh,botCh,yourScore=0,botScore=0;
const botWon = "You lose";
const youWon = "You won";
const tie = "Match tie";

btn.onclick = () => {
   game();
   score();
   finalWin();

}





const game = () =>{
    yourCh = prompt("ENter your choice", "Snake, Water, Gun");

    yourCh = yourCh.toLowerCase();
    
    let index = Math.floor(Math.random()*2);
    botCh = gameChoice[index];

    if(yourCh == botCh)
    {
        return testDiv.innerText= `${tie}`;
    }else if(yourCh == 'snake'&& botCh == 'water')
    {
        yourScore ++;
        return testDiv.innerText = `${youWon}`;
    }else if(yourCh == "water" && botCh=="gun")
    {
        yourScore ++;
        return testDiv.innerText=`${youWon}`;
    }else if(yourCh =="gun"&& botCh=="snake")
    {
        yourScore ++;
        return testDiv.innerText=`${youWon}`;
    }
    else{
        botScore++;
        return testDiv.innerText=`${botWon}`;
    }
}

const score = () =>
{
    return scor.innerText = `Your score is ${yourScore} Computer score is ${botScore}`;
}

const finalWin = () =>
{
    if(yourScore == 5)
    {
        yourScore=0;
        botScore=0;
        return testDiv.innerText = "You are winer";
    }else if(botScore == 5)
    {
        yourScore=0;
        botScore=0;
        return testDiv.innerText = "Computer is winer";
    }
}

resetBtn.onclick = () =>
{
    testDiv.innerText="";
    scor.innerText="";
}