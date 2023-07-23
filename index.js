var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomNumber3 = Math.floor(Math.random() * 6) + 1;
var randomNumber4 = Math.floor(Math.random() * 6) + 1; 

// var randomDiceImage = 'images/dice' + randomNumber1 + '.png';
// var randomDiceImage2 = 'images/dice' + randomNumber2 + '.png';
// var randomDiceImage3 = 'images/dice' + randomNumber3 + '.png';
// var randomDiceImage4 = 'images/dice' + randomNumber4 + '.png';

document.querySelectorAll('img')[0].setAttribute('src', 'images/dice' + randomNumber1 + '.png');

document.querySelectorAll('img')[1].setAttribute('src', 'images/dice' + randomNumber2 + '.png');

document.querySelectorAll('img')[2].setAttribute('src', 'images/dice' + randomNumber3 + '.png');

document.querySelectorAll('img')[3].setAttribute('src', 'images/dice' + randomNumber4 + '.png');

var player1 = randomNumber1 + randomNumber2;
var player2 = randomNumber3 + randomNumber4;

if(player1 > player2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins!'
} else if(player2 > player1) {
    document.querySelector('h1').innerHTML = 'Player 2 wins! '
} else {
    document.querySelector('h1').innerHTML = 'Draw!'
}