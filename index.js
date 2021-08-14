var readlineSync = require('readline-sync');

var score = 0;
var username = readlineSync.question("What is your name\n");
console.log("welcome " + username);

function quiz(question,answer){
  var userAnswer = readlineSync.question("\n"+question+"\n");
  if(userAnswer===answer){
    console.log("Correct!");
    score++;
    console.log("Current Score : "+score+"\n");
  }
  else{
    console.log("Wrong!!")
    console.log("Current Score : "+score+"\n");
  }

}

var questions = [{
  question : "In which year was Real Madrid formed ?",
  answer : "1902"
},
{
  question : "How many Champions League they have won?",
  answer : "13" 
},
{
  question : "Number of league titles won?",
  answer : "34"
},
{
  question : "Highest Goal Scorer in history?",
  answer : "Cristiano Ronaldo"
},
{
  question : "Opponent in la decima was?",
  answer : "Atletico Madrid"
},
{
  question : "What else is name of real madrid?",
  answer : "Los Blancos"
},
{
  question : "President of Real Madrid is?",
  answer : "Florentino Perez"
}


]

for (var i= 0;i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}
console.log("Your Final Score is "+ score +" Out of "+questions.length)