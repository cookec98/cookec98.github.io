$(document).ready(function() {
  $('.thinking').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://animechan.vercel.app/api/random",
      success: function(results) {
        $('.quote').text(results["quote"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});

$(document).ready(function() {
  $('.man').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://api.quotable.io/random",
      success: function(results) {
        $('.quote2').text(results["content"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
