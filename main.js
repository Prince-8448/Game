"use strict";



let playerX = document.getElementById('x');
let playerO = document.getElementById('o');

playerX.className = 'current-player';
let tic = function(event){
    let player = document.getElementsByClassName('current-player')[0];
    console.log(player.id);
    if (event.target.className === ''){
        if (player.id === 'x'){
            event.target.className = 'x';
            checkWin(event.target.className);
        }else{
            event.target.className = 'o';
            checkWin(event.target.className);
        }
        playerO.classList.toggle('current-player');
        playerX.classList.toggle('current-player');
    }
};

let r = document.querySelector('table');

r.addEventListener('click', tic);

let t = document.querySelector('input');
t.addEventListener('click', function(){
    window.location.reload();
});
