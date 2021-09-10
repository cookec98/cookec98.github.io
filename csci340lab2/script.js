$(document).ready(function() {
  $('.quoteButton').click(function() {
    var random = Math.floor(Math.random()*2);
    console.log(random);
    if (random == 0){
      $.ajax({
        dataType: "json",
        url: "https://animechan.vercel.app/api/random",
        success: function(results) {
          $('.quote').text(results["quote"] + " anime");
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
          $('.quote').text(results["content"] + " real");
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    }
  });
});
