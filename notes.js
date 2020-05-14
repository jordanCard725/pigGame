// .querySelector is used to select html elements, classes, or id's as a setter or a getter, or to change the CSS of that element.
    // Setter : When you set the selected element to something.  The first example below sents it to dice.
    // Getter : When you select the element and you can console.log() to find out and print what that element currently is set to.
    // Change CSS : use .style method followed by the .propertyYourChanging = 'newStyleValue' (example below)

// .textContent sends only text to the browser.
// .innerHTML sends HTML code to the browser. (commented out below)

///// Setter :
  // document.querySelector('#current-' + activePlayer).textContent = dice;

  // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

/*
///// Getter :
var x = document.querySelector('#score-0').textContent;
console.log(x); // 43
*/

/*
///// Change CSS :
document.querySelector('.dice').style.display = 'none';
*/


// EVENTS : notifications that are sent to notify the code that something happened (click button, resize window, croll, press key...).
  // Event Listener : a funct. that performs an action based on a certain event. It waits for a specific event to happen.
  // .addEventListner - 2 arguments :
      // 1) type of event
      // 2) .a. callback function : function that will be called as soon as event happens - written without parenthesis (), thus calling it. OR .b. write an anonymous function directly into the second argument.




/*
///// .getElementByID selector used here to set all scores to 0 :
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
*/




///// Select the roll dice button and add eventListener() method:

/*
function btn() {
  //codeBlockHere
}
btn();
// you could make an outside function like this and then call it in the second argument :  .addEventListener('click', btn);
*/

// Change 'active' CSS rules
  // OPTIONS FOR ADDING AND REMOVING CSS SELECTORS
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    