'use strict';



let userName = prompt('Please Enter your Name:');
if(userName==null)
{
    alert('Please Provide your Name')
}
else{
    alert('Welcome to my webpage ' + userName);
    alert('Now im going to ask you  some random questions , hope you\'re ready!');
}


let ownerName = prompt('Let\'s see if you can guess my name!');

switch (ownerName) {
    case 'Ahmad':
        alert('You\'re correct');
        console.log('You got that right');
        break;
    case 'ahmad':
        alert('You\'re correct, but you should use a capital letter at the beggining of Names!');
        console.log('You got that right, esh!');
        break;

    case null:
        prompt('Please Enter a name!');
        break;
    default:
        alert('nope you\'re wrong, my Name is Ahmad'),
            console.log('wroooong !');

}


let favCar = prompt('what\'s favorite car?');

if (favCar.toLowerCase()=='Alfa Romeo' || 'alfa romeo') {
    alert('Correct!, its an Alfa Romeo Gulia to be more specific :p')
    console.log('correct !')
} else if ( favCarfavCar.toLowerCase()== 'Nissan GTR' || 'nissan gtr'){

alert('Correct!, :p')
    console.log('correct !')
}
else{
    alert('you got that wrong!');
    console.log('nope , wrong!');
}
