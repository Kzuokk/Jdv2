var board = ['','','','','','','','',''];
var currentPlayer = 'X';

function printBoard() {
    console.log(board[0] + '|' + board[1] + '|' + board[2]);
    console.log('-+-+-');
    console.log(board[3] + '|' + board[4] + '|' + board[5]);
    console.log('-+-+-');
    console.log(board[6] + '|' + board[7] + '|' + board[8]);
}

function makeMove(position) {
    if(board[position] == '') {
        board[position] = currentPlayer;
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    } else {
        console.log('Posição já ocupada!');
    }
    printBoard();
    checkWin();
}

function checkWin() {
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(var i = 0; i < winningCombinations.length; i++) {
        if(board[winningCombinations[i][0]] == board[winningCombinations[i][1]] && 
           board[winningCombinations[i][1]] == board[winningCombinations[i][2]] && 
           board[winningCombinations[i][0]] != '') {
            console.log('O jogador ' + board[winningCombinations[i][0]] + ' venceu!');
            return;
        }
    }

    if(!board.includes('')) {
        console.log('Empate!');
    }
}
