/*
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
GAME RULES: THE PIG GAME

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/////////////////////////////////////////////////////////////
///// set some variables to be used :
////////////////////////////////////////////////////////

var scores, roundScores, activePlayer, gamePlaying, player1, player2, six, winningScore, rolledOne0, rolledOne1;

showRules();
init();
//pickNames();

////////////////////////////////////////////////////////////
///// 'LETS PLAY' BUTTON :
////////////////////////////////////////////////////////

document.querySelector('.btn-play').addEventListener('click', function () {
  document.querySelector('.rules').style.display = 'none';

  // if ((player1 === '' || 'Player 1') || (player2 === '' || 'Player 2')) {
  //   pickNames();
  // }

  if (gamePlaying === false) {
    pickNames();
  }
})

////////////////////////////////////////////////////////////
///// 'RULES' BUTTON :
////////////////////////////////////////////////////////

document.querySelector('.btn-rules').addEventListener('click', showRules);


////////////////////////////////////////////////////////////
///// SHOW RULES :
////////////////////////////////////////////////////////
function showRules () {
  document.querySelector('.rules').style.display = 'block';
}

////////////////////////////////////////////////////////////////////
///// Allows player 1 & 2 to pick a name :
////////////////////////////////////////////////////////

function pickNames () {
  player1 = prompt('Please enter player one\'s name!');
  document.querySelector('#name-0').textContent = player1;
  player2 = prompt('Please enter player two\'s name!');
  document.querySelector('#name-1').textContent = player2;
}

////////////////////////////////////////////////////////////
///// 'ROLL' BUTTON
////////////////////////////////////////////////////////////
//Event Listener - instead, we're writing the function directly into the argument :

document.querySelector('.btn-roll').addEventListener('click', function () {

  // Event Listener for 'Winning Score' input :
  if (winningScore > 1) {
    gamePlaying = true;
  } else if (winningScore === 1) {
    alert('Someone already won this game. You need to start a New Game!');
  } else {
    alert('You need to choose a Winning score! (top left) -- Then hit the \'submit\' button');
  }

  removeRolledOne();

  if (gamePlaying) {
    // 1. Random #
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled is not a 1.
    if (dice !== 1) {

      // Add score :
      roundScore += dice;

      // Display score :
      document.querySelector('#current-' + activePlayer).textContent = roundScore;

      // check six's :
      if (dice === 6) {
        six++
        if (six === 2) {
          alert('You just scored two six\'s in a row!  You lose ALL your points!')
          roundScores = 0;
          scores[activePlayer] = 0;
          document.getElementById('current-' + activePlayer).textContent = '0';
          document.querySelector('#score-' + activePlayer).textContent = roundScores;
          nextPlayer();
        }
      } else {
        six = 0;
      }

    } else {
      // Next Player : (using ternary operator)
      document.querySelector('.rolled-one-' + activePlayer).style.display = 'block';
      nextPlayer();
    }
  }
});

////////////////////////////////////////////////////////
////// 'HOLD' BUTTON : Event Listener -
////////////////////////////////////////////////////////

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {

    // Add CURRENT score to GLOBAL score :
    scores[activePlayer] += roundScore;

    // Update the UI (user interface) :
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player WON the game :
    if (scores[activePlayer] >= winningScore) {

      // changes player # to winner!
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';

      // removes dice from UI
      document.querySelector('.dice').style.display = 'none';

      // changes CSS rules for the winner
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

      // removes from being the active player
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      // change status of gamePlaying
      gamePlaying = false;
      winningScore = 1;

    } else {

      nextPlayer();
    }
  }
});


///////////////////////////////////////////////////////////
// Event Listener for 'New Game' button :

document.querySelector('.btn-new').addEventListener('click', init);

///////////////////////////////////////////////////////////
///// nextPlayer function :

function nextPlayer () {

  // nextPlayer : (using ternary operator)
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;


  // Reset roundscore to 0 on browser
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // Change 'active' CSS rules
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // Clear the dice so that next player has clean screen :
  //document.querySelector('.dice').style.display = 'none';

  six = 0;
}

/////////////////////////////////////////////////////////////
///// Init function (used on refresh and 'new game' button):

function init () {

  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  six = 0;
  gamePlaying = false;
  winningScore = 0;
  // player1 = 'Player 1';
  // player2 = 'Player 2';

  // if ((player1 === '' || 'Player 1') || (player2 === '' || 'Player 2')) {
  //   pickNames();
  // }

  document.querySelector('#submit').addEventListener('click', function () {
    winningScore = document.querySelector('#winning-score').value;
  })

  //Set Player 1 & 2 back instead of saying 'winner' / but we've added code that they can choose player names instead :
  // document.getElementById('name-0').textContent = 'Player 1';
  // document.getElementById('name-1').textContent = 'Player 2';

  //Keep player 1 and player 2 set to names already given (until page is reloaded)
  document.querySelector('#name-0').textContent = player1;
  document.querySelector('#name-1').textContent = player2;


  // Displays the 'roll' button and removes the 'dice' :
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.btn-roll').style.display = 'block';

  // Zero's out all round and global scores on UI:
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';

  // Removes winner CSS styles and resets active player :
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  // Removes class rolled-one-# from UI
  removeRolledOne();

};


/////////////////////////////////////////////////////////////
// Remove the text that says you rolled a one :

function removeRolledOne () {
    rollOne0 = document.querySelector('.rolled-one-0').style.display = 'none';
    rollOne1 = document.querySelector('.rolled-one-1').style.display = 'none';
}


////// Event Listener for 'Winning Score' input :
// if (winningScore !== 0) {
//   gamePlaying = true;
// } else {
//   alert('You must choose a Winning score! (top left) -- and hit \'submit\'')
// }





