$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var interestInput = parseInt($("select#interests").val());
    var devInput = parseInt($("select#dev").val());
    var timeInput = parseInt($("select#time").val());
    var total = interestInput + devInput + timeInput;

    if (total <= 10) {
      $("#cs").show()
      $(".nameInsert").text(nameInput)
      $(".emailInsert").text(emailInput)
      $("#ruby").hide()
      $("#php").hide()
      $("#java").hide()
    }
    else if (total > 11 && total <= 15 ) {
      $("#ruby").show()
      $(".nameInsert").text(nameInput)
      $(".emailInsert").text(emailInput)
      $("#cs").hide()
      $("#php").hide()
      $("#java").hide()
    }
    else if (total > 15 && total <= 20) {
      $("#java").show()
      $(".nameInsert").text(nameInput)
      $(".emailInsert").text(emailInput)
      $("#cs").hide()
      $("#php").hide()
      $("#ruby").hide()
    }
    else if ( total >= 21 && total < 30) {
      $("#php").show()
      $(".nameInsert").text(nameInput)
      $(".emailInsert").text(emailInput)
      $("#cs").hide()
      $("#java").hide()
      $("#ruby").hide()
    }
    else {
      alert("please fill in the question")
    }
  });
});
