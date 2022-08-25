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