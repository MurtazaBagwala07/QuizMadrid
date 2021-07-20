var readlineSync = require('readline-sync');

var score = 0;
var username = readlineSync.question("What is your name\n");
console.log("welcome " + username);

function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer){
    console.log("Correct!");
    score++;
  }
  else{
    console.log("Wrong!!")
    score--;
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
}

]

for (var i= 0;i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}
console.log("Your Final Score is "+score +" Out of 5")