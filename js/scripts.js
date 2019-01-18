$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var interestInput = $("select#interests").val();
    var devInput = $("select#dev").val();

    if (interestInput === "front-end" && devInput === "software") {
      $("#cs").show()
      $(".nameInsert").text(nameInput)
      $("#emailInsert").text(emailInput)
      $("#ruby").hide()
      $("#php").hide()
      $("#java").hide()
    }
    else if (interestInput === "front-end" && devInput === "app") {
      $("#ruby").show()
      $(".nameInsert").text(nameInput)
      $("#emailInsert").text(emailInput)
      $("#cs").hide()
      $("#php").hide()
      $("#java").hide()
    }
  });
});
