var readlineSync = require("readline-sync");
var score = 0;
var highScores = [
  {
    name : "Amit",
    score : 5,
  },
  {
    name : "Anjali",
    score : 0 ,
  },
  {
    name : "Alok",
    score : -1 ,
  }
]

let questions = [{
    question : "Chandler Bin's middle name was?",
    answer : "Muriel"
  },
  {
    question : "Who had famous guest appearance as Monica's ex-boyfriend Richard?",
    answer : "Tom Sellof"
  },
  {
    question : "who's famous dialogue was famous word unagi ",
    answer : "Rosh Gayler"
  },
  {
    question : "What was Phoebe twin sister names",
    answer : "Ursula buffa"
  },
  {
    question : "How many sisters did Joey has in the show",
    answer : "Seven"
  }];
function welcomeMessage() {
 var userName = readlineSync.question("May I know your name? ");

  console.log("Welcome "+ userName + " How better you watched series - Friends?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You have scored : ", score);
  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcomeMessage();
game();
showScores();
