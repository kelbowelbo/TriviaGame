var count=30;
var counter;
var firstAnswer="Me"; 
var secondAnswer="IBusiness & E-Commerce";
var thirdAnswer="Zero";
var fourthAnswer="LW";
var firstSelected="";
var secondSelected="";
var thirdSelected="";
var fourthSelected="";
var correct=0;
var incorrect=0;
var unanswered=0;

function timer() {
  count=count-1;
  $("#timeRemaining").html("Time Remaining: " + count);
  if (count <= 0) {
    clearInterval(counter);
    tally();
    $(".triviaWindow").hide();
    $("#correct").html("Correct Answers: " + correct);
    $("#incorrect").html("Incorrect Answers: " + incorrect);
    $("#unanswered").html("Unanswered: " + unanswered);
    $(".gameStatistics").show();
    return;
  }
}

function tally() {
  if (firstSelected === firstAnswer) {
      correct++;
  }
  else if (firstSelected === "") {
      unanswered++;
  }
  else {
      incorrect++;
  }

  if (secondSelected === secondAnswer) {
      correct++;
  }
  else if (secondSelected === "") {
      unanswered++;
  }
  else {
      incorrect++;
  }

  if (thirdSelected === thirdAnswer) {
      correct++;
  }
  else if (thirdSelected === "") {
      unanswered++;
  }
  else {
      incorrect++;
  }
  if (fourthSelected === fourthAnswer) {
      correct++;
  }
  else if (fourthSelected === "") {
      unanswered++;
  }
  else {
      incorrect++;
  }
}

function startGame() {
  counter=setInterval(timer, 1000); 
  $("#timeRemaining").html("Time Remaining: " + count);
  playBackground();
    
  $("input[type='radio']").click(function(){
    firstSelected = $("input[name='firstQuestion']:checked").val(); 
    secondSelected = $("input[name='secondQuestion']:checked").val(); 
    thirdSelected = $("input[name='thirdQuestion']:checked").val(); 
    fourthSelected = $("input[name='fourthQuestion']:checked").val(); 
  });
}

$(document).ready(function() {
  $(".gameStatistics").hide();
  $(".triviaWindow").hide();
  $("button").click(function() {
    $(".startWindow").hide();
    $(".triviaWindow").show();
    startGame();
  });
});

function playBackground() {
  var x=document.getElementById("backgroundmusic");
  x.play();
}