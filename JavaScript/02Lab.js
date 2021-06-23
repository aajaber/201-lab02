'use strict';


let score = 0;
let userName = prompt('Please Enter your Name:');
if (userName == null) {
    alert('Please Provide your Name');
}
else {
    alert('Welcome to my webpage ' + userName);
    alert('Now im going to ask you  some random questions , hope you\'re ready!');
}


let ownerName = prompt('Let\'s see if you can guess my name!');

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

let carsFan = confirm('Are you a car enthusiast?');
console.log(carsFan);

switch (carsFan) {
    case true:
        document.write('Glad to see that you\'re a cars fan');
        break;
    case false:
        document.write('too bad!');
        break;

}

let favCar = prompt('what\'s my favorite car?');

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

let myMajor = prompt('can you guess what i studied back in university?');

if (myMajor == 'Computer Science' || 'computer science') {
    alert('Correct!');
    console.log('correct !');
    score++;
}
else {
    alert('you got that wrong!');
    console.log('nope , wrong!');
}

let myUni = prompt('can you guess my university\'s name?');

if (myMajor == 'AAU' || 'aau') {
    alert('Correct!');
    console.log('correct !');
    score++;
}
else {
    alert('you got that wrong!');
    console.log('nope , wrong!');
}

let yearOfGraduation = prompt('can you guess when did I graduate ?');

if (yearOfGraduation == '2020') {
    alert('Correct!');
    console.log('correct !');
    score++;
}
else {
    alert('you got that wrong!');
    console.log('nope , wrong!');
}

let numberInMind = 5;
let guessedNumber = prompt('I have a number in mind, lets see if you guess it!');

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


let favColors = ['black', 'green', 'blue', 'red', 'grey', 'white'];
let attempts = 6;


let guessedColor = prompt('Lets see if you can guess one of my favorite colors!, but you only have 6 attempts to guess it right!');
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


alert('and we are done ! your score is : ' + score);



// =----------------------------------------- 