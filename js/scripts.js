$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var interestInput = $("select#interests").val();
    var devInput = $("select#dev").val();


  });
});
