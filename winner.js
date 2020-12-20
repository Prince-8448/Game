const board = document.querySelectorAll('td');
let table = document.querySelector('table');

function checkWin(player) {
    
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];


    let grid = Array.from(board, function(square){
        return square.classList.contains(player);  
    });
    for (let win of winningPositions) {    
        if (grid[win[0]] && grid[win[1]] && grid[win[2]]) {
            for (let sq of win) {        
                board[sq].style.backgroundColor = 'lightGreen';   
            }
            alert('Player '+player[0]+" has Won the match");
            table.removeEventListener('click', tic);
            return true;
        }
    }
    return false;
}