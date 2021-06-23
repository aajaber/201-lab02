
'use strict';


let score = 0;

let userName = prompt('Please Enter your Name:');

/*=============QUESTION #1==============================Function was added by the Driver==========*/
function Question1ans(answer) {
  if (answer == null) {
    alert('Please Provide your Name');
  }
  else {
    alert('Welcome to my webpage ' + answer);
    alert('Now im going to ask you  some random questions , hope you\'re ready!');
  }
}

Question1ans(userName);




let ownerName = prompt('Let\'s see if you can guess my name!');

/*=============QUESTION #2==============================Function was added by the Driver==========*/
function Question2ans() {
  switch (ownerName) {
    case 'Ahmad':
      alert('You\'re correct');
      console.log('You got that right');
      score++;
      break;
    case 'ahmad':
      alert('You\'re correct, but you should use a capital letter at the beggining of Names!');
      console.log('You got that right, esh!');
      score++;
      break;

    case null:
      prompt('Please Enter a name!');
      break;
    default:
      alert('nope you\'re wrong, my Name is Ahmad'),
        console.log('wroooong !');

  }
}
Question2ans(ownerName);




let carsFan = confirm('Are you a car enthusiast?');

/*=============QUESTION #3==============================Function was added by the Driver==========*/
function Question3ans() {
  console.log(carsFan);

  switch (carsFan) {
    case true:
      document.write('Glad to see that you\'re a cars fan');
      break;
    case false:
      document.write('too bad!');
      break;

  }
}
Question3ans();



let favCar = prompt('what\'s my favorite car?');

/*=============QUESTION #4==============================Function was added by the Driver==========*/
function Question4ans() {
  if (favCar == 'Alfa Romeo' || favCar.toLowerCase() == 'alfa romeo') {
    alert('Correct!, its an Alfa Romeo Giulia to be more specific :p');
    console.log('correct !');
    score++;
  } else if (favCar == 'Nissan GTR' || favCar.toLowerCase() == 'nissan gtr') {
    alert('Correct!, :p');
    console.log('correct !');
    score++;
  }
  else {
    alert('you got that wrong!');
    console.log('nope , wrong!');
  }
}
Question4ans();




let myMajor = prompt('can you guess what i studied back in university?');

/*=============QUESTION #5==============================Function was added by the Driver==========*/
function Question5ans() {
  if (myMajor == 'Computer Science' || myMajor == 'computer science') {
    alert('Correct!');
    console.log('correct !');
    score++;
  }
  else {
    alert('you got that wrong!');
    console.log('nope , wrong!');
  }
}
Question5ans();

let myUni = prompt('can you guess my university\'s name?');

/*=============QUESTION #6==============================Function was added by the Driver==========*/
function Question6ans() {
  if (myUni == 'AAU' || myUni == 'aau') {
    alert('Correct!');
    console.log('correct !');
    score++;
  }
  else {
    alert('you got that wrong!');
    console.log('nope , wrong!');
  }
} 
Question6ans();



let yearOfGraduation = prompt('can you guess when did I graduate ?');

/*=============QUESTION #7==============================Function was added by the Driver==========*/
function Question7ans() {
  if (yearOfGraduation == '2020') {
    alert('Correct!');
    console.log('correct !');
    score++;
  }
  else {
    alert('you got that wrong!');
    console.log('nope , wrong!');
  }
} 
Question7ans();

let numberInMind = 5;
let guessedNumber = prompt('I have a number in mind, lets see if you guess it!');

/*=============QUESTION #8==============================Function was added by the Driver==========*/
function Question8ans() {
  while (!guessedNumber) {
    guessedNumber = prompt('I have a number in mind, lets see if you guess it!');
  }
  if (guessedNumber == numberInMind) {
    alert('You\'re correct');
    console.log('You got that right');
    score++;
  }
  else if (guessedNumber > numberInMind) {
    alert('Wrong, your guess is High!');
    console.log('Wrong!');
  }
  else if (guessedNumber < numberInMind) {
    alert('Wrong, your guess is Low!');
  }
} 

Question8ans();


/*=============QUESTION #9==============================Function was added by the Driver==========*/


let favColors = ['black', 'green', 'blue', 'red', 'grey', 'white'];
let attempts = 6;

let guessedColor = prompt('Lets see if you can guess one of my favorite colors!, but you only have 6 attempts to guess it right!');
function Question9ans() {
  while (!guessedColor) {
    guessedColor = prompt('Lets see if you can guess one of my favorite colors!, but you only have 6 attempts to guess it right!');
  }


  for (let i = 0; i < attempts; i++) {


    if (guessedColor == favColors[0] || guessedColor == favColors[1] || guessedColor == favColors[2] || guessedColor == favColors[3] || guessedColor == favColors[4] || guessedColor == favColors[5]) {
      alert('correct!');
      console.log(guessedColor);
      score++;
      i = 6;
      break;
    }
    else {
      guessedColor = prompt('wrong, guess again ! but remember you only got  ' + --attempts + ' left');

    }

  }
} Question9ans();

alert('and we are done ! your score is : ' + score);


/* This Code added by the Driver (Anas Ahmad) */


let inputuser = prompt('Enter Your Driver Name');
function Test(userName) {
  return alert('Welcome ' + userName);
}
Test(inputuser);
