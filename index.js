var readlineSync = require('readline-sync');

var questions = [{
    question : 'What is my favourite colour ? ',
    answer : 'Black'
  },{
    question : 'What would I choose : Going to a Wedding or to a Club ? ',
    answer : 'Club'
  },{
    question : 'Did I ever have braces : Yes or No ? ',
    answer : 'Yes'
  },{
    question : 'What pet do I have ? ',
    answer : 'Dog'
  },{
    question : 'What is my height in feet ? ',
    answer : '5.6'
  }];

function welcome(){
  var userName = readlineSync.question('What is your name ? ');
  console.log('Welcome ' + userName + ' !');
  console.log("LET'S CHECK HOW WELL YOU KNOW ME !");
}

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right !");
    score++;
  }
  else{
    console.log("Wrong !");
    console.log(answer);
  }

  console.log("Current score = " + score);
  console.log("::::::::::::::::::::");
}

function play(){
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer);
  }
}

function finalDisplay() {
  console.log("Yayyyy Your Score is : " + score);
    console.log("Check out the high scores and if you scored more ping me and you'll be on the top");
    highScores.map(score => console.log(score.name, " : ", score.score))
}