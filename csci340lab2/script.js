var random = 2;
var author = "";

$(document).ready(function() {
  $('.quoteButton').click(function() {
    random = Math.floor(Math.random()*2);
    console.log(random);
    if (random == 0){
      $.ajax({
        dataType: "json",
        url: "https://animechan.vercel.app/api/random",
        success: function(results) {
          $('.quote').text(results["quote"]);
          author = results["anime"];
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    }
    else {
      $.ajax({
        dataType: "json",
        url: "https://api.quotable.io/random",
        success: function(results) {
          $('.quote').text(results["content"]);
          author = results["author"];
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    }
  });
});
var winStreak = 0;
$('.goku').on("click", function() {
  if (random == 0){
    winStreak ++;
    $('.correct').text("Correct!! Quote from: " + author + ". Win streak is " + winStreak);
  } else {
    winStreak = 0
    $('.correct').text("Incorrect D: Quote from: " + author + ". Win streak is " + winStreak);
  }
});
$('.people').on("click", function() {
  if (random != 0){
    winStreak ++;
    $('.correct').text("Correct!! Quote from: " + author + ". Win streak is " + winStreak);
  } else {
    winStreak = 0
    $('.correct').text("Incorrect D: Quote from: " + author + ". Win streak is " + winStreak);
  }
});
