alert("Let's check if you read Joao's Bio:");

questionLoader = Math.floor(Math.random()*5 + 1);

if (questionLoader > 3) {
  var userChoice = prompt('How long has he lived in London for?:');
  var yearsInLondon = 2;
  londonQuestion();

} else if (questionLoader <= 3) {
  var userChoice = prompt('How many titles has Flamengo won?:');
  var numberOfTitles = 6;
  titleQuestion();
}

//This function gets called when the question is related to Joao in London
function londonQuestion(){

  while(userChoice != yearsInLondon){

    if (userChoice > yearsInLondon) {
      alert('Wow, too high, try a lower number!');
      userChoice = prompt('Choose a number between 1 and 5:');

    }else if (userChoice<yearsInLondon) {
      alert('Nope! A higher guess sir!');
      userChoice = prompt('Choose a number between 1 and 5:');
    }
  }
  alert('Nice one man! You got it!');
}

//This function gets called when the question is related to Joao in London
function titleQuestion(){

  while(userChoice != numberOfTitles){

    if (userChoice > numberOfTitles) {
      alert('Wow, too high, try a lower number!');
      userChoice = prompt('Choose a number between 1 and 7:');
      break;

    }else if (userChoice<numberOfTitles) {
      alert('Nope! A higher guess sir!');
      userChoice = prompt('Choose a number between 1 and 7:');

    }
  }
  alert('Nice one man! You got it!');
}













