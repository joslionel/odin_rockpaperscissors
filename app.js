function computerPlay() {
    const play = Math.floor(Math.random() * 3);
    
    switch (play) {
        case 0:
            return 0;
            break;
        case 1:
            return 1;
            break;
        case 2:
            return 2;
            break;
        default:
            break;
    }
};

let uScore = 0;
let cScore = 0;
let gameCount = 0;

function gamePlay(user, computer) {
    
    user = this.id
    computer = computerPlay();
    
    
    const userScore = document.querySelector("#users")
    const AIScore = document.querySelector('#ais');
    const result = document.querySelector('#result');
    const noOfGames = document.querySelector('#games');
    
    if (user === 'rock') {
        
        gameCount++
        
        if (computer === 0) {
            
            result.textContent = "It's a draw! The computer also chose rock.";
            noOfGames.textContent = `${gameCount}`
        } else if (computer === 1) {
            cScore++
            AIScore.textContent = `${cScore}`;
            result.textContent = "You LOSE! The computer chose paper.";
            noOfGames.textContent = `${gameCount}`
        } else if (computer === 2) {
            uScore++
            userScore.textContent = `${uScore}`;
            result.textContent = "You WIN! The computer chose scissors!"
            noOfGames.textContent = `${gameCount}`
        }
    } else if (user === 'paper') {

        gameCount++

        if (computer === 0) {
            uScore++
            userScore.textContent = `${uScore}`;
            result.textContent = "You WIN! The computer chose rock!"
            noOfGames.textContent = `${gameCount}`
        } else if (computer === 1) {
            result.textContent = "It's a draw! The computer also chose paper.";
            noOfGames.textContent = `${gameCount}`
        } else if (computer === 2) {
            cScore++
            AIScore.textContent = `${cScore}`;
            result.textContent = "You LOSE! The computer chose scissors.";
            noOfGames.textContent = `${gameCount}`;
    }
    } else if (user === 'scissors') {

        gameCount++

        if (computer === 0) {
            cScore++
            AIScore.textContent = `${cScore}`;
            result.textContent = "You LOSE! The computer chose rock.";
            noOfGames.textContent = `${gameCount}`;
        } else if (computer === 1) {
            uScore++
            userScore.textContent = `${uScore}`;
            result.textContent = "You WIN! The computer chose paper!"
            noOfGames.textContent = `${gameCount}`
        } else if (computer === 2) {
            result.textContent = "It's a draw! The computer also chose scissors.";
            noOfGames.textContent = `${gameCount}`
    }
 };
    if (uScore == 5) {
        window.alert('The player wins!;')
        window.location.reload();
    } else if (cScore == 5) {
        window.alert('The AI wins!');
        window.location.reload();
    } else if (gameCount == 20) {
        window.alert('Ah, well, that\'s probably enough for now... Let\'s take a break!')
        window.location.reload();
    }

    

    
}





const playRock = document.querySelector('#rock');
const playPaper = document.querySelector('#paper');
const playScissors = document.querySelector('#scissors');

playRock.addEventListener('click', gamePlay);
playPaper.addEventListener('click', gamePlay);
playScissors.addEventListener('click', gamePlay);

// function game() {
// let userscore = 0;
// let computerscore = 0;
// for (let i = 0; i < 5; i++) {
//     let gamey = gamePlay();
//     if (gamey === 0) {
//         console.log("It's a draw!");
//     } else if (gamey === 1) {
//         userscore++;
//         console.log("You win!");
//     } else if (gamey === 2) {
//         computerscore++;
//         console.log("You lose!");
//     }
//     console.log("The current score is " + computerscore + " for the AI and " + userscore + " to you.")
// }
// console.log("The final score is " + computerscore + " for the AI and " + userscore + " to you.")
// if (computerscore < userscore) {
//     console.log("You are the ouright winner!");
// } else if (computerscore === userscore) {
//     console.log("It was a draw. You're as good as a bot.");
// } else {
//     console.log("Sorry mang, you loost.");
// }
// }
