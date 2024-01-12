let currentPlayer = "X";
let array = Array(9).fill(null);

function handleClick(el) {
    const id = Number(el.id);
    
    if (array[id] === null) {
        array[id] = currentPlayer;
        el.innerText = currentPlayer;
        checkWinner();
        el.style.color = currentPlayer === "X" ? "red" : "green";
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    if (
        (array[0] !== null && array[0] === array[1] && array[1] === array[2]) ||
        (array[3] !== null && array[3] === array[4] && array[4] === array[5]) ||
        (array[6] !== null && array[6] === array[7] && array[7] === array[8]) ||
        (array[0] !== null && array[0] === array[3] && array[3] === array[6]) ||
        (array[1] !== null && array[1] === array[4] && array[4] === array[7]) ||
        (array[2] !== null && array[2] === array[5] && array[5] === array[8]) ||
        (array[0] !== null && array[0] === array[4] && array[4] === array[8]) ||
        (array[2] !== null && array[2] === array[4] && array[4] === array[6])
    ) {
       displayEndMessage(`Player ${currentPlayer} won!`);
        return ;
    }

   if(!array.some(e => e===null)){
       displayEndMessage(`DRAW`);
   }
}




function displayEndMessage(message) {
       document.getElementById("container").style.display = "none";
       document.getElementById("message").textContent = message;
       document.getElementById("end").style.display = "flex";
       gameOver = true;
   }
   
   function resetGame() {
       document.getElementById("container").style.display = "flex";
       array = Array(9).fill(null);
       currentPlayer = "X";
       document.getElementById("end").style.display = "none";
       gameOver = false;
   
       // Reset the board
       const cells = document.querySelectorAll('.col');
       cells.forEach(cell => {
           cell.innerText = '';
       });
   }
   
   document.querySelector('input[type="reset"]').addEventListener('click', resetGame);