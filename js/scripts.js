$(document).ready(function() {

  $("div#click-one").click(function(event) {
    var whatToSay = "Goodbye!";
    alert(whatToSay);
  });

  $("div#click-two").click(function(event) {
     alert(whatToSay);
  });

});
