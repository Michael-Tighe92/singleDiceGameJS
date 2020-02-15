// Variables

let playerWins = 0;
let CPUWins = 0;
let count = 0;
let whoWon = null;

//Function
//calculateGame determines if player or CPU wins or if draw

function calculateGame (player,CPU,count)
{
    if (player > CPU)
    {
        console.log(`Player Wins round ${count}!`);
        return true;
    }
    else if (CPU > player)
    {
        console.log(`CPU Wins round ${count}!`);
        return false;
    }
    else
    {
        console.log(`Round ${count} ends in a draw!`);
        return null;
    }
}

console.log("----- Welcome to single dice game! ------");
console.log("-----           Rules              ------");
console.log("1.) You or CPU must reach 5 wins in order to end the game");
console.log("2.) Draws do not count as either a win or loss");

while (playerWins < 5 && CPUWins < 5)
{
    count ++;

    //Allows us to get a random number from a range of 1 to 6
    let player = Math.floor(Math.random() * 6) + 1;
    let CPU = Math.floor(Math.random() * 6) + 1;

    console.log(`player's die = ${player}, CPU's die = ${CPU}`);
    whoWon = calculateGame(player,CPU,count);
    if (whoWon === true)
        playerWins ++;
    else if (whoWon === false)
        CPUWins ++;
}

if (playerWins > CPUWins)
    console.log(`Player won and finished the game in round ${count}!!!`);
else
    console.log(`CPU won and finished the game in round ${count}!!!`);