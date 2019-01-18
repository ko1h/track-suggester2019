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
      $(".emailInsert").text(emailInput)
      $("#ruby").hide()
      $("#php").hide()
      $("#java").hide()
    }
    else if (interestInput === "front-end" && devInput === "app") {
      $("#ruby").show()
      $(".nameInsert").text(nameInput)
      $(".emailInsert").text(emailInput)
      $("#cs").hide()
      $("#php").hide()
      $("#java").hide()
    }
    else if (interestInput === "front-end" && devInput === "website") {
      $("#java").show()
      $(".nameInsert").text(nameInput)
      $(".emailInsert").text(emailInput)
      $("#cs").hide()
      $("#php").hide()
      $("#ruby").hide()
    }
    else if (interestInput === "back-end" && devInput === "app") {
      $("#php").show()
      $(".nameInsert").text(nameInput)
      $(".emailInsert").text(emailInput)
      $("#cs").hide()
      $("#java").hide()
      $("#ruby").hide()
    }
    else if (interestInput === "back-end" && devInput === "website") {
      $("#ruby").show()
      $(".nameInsert").text(nameInput)
      $(".emailInsert").text(emailInput)
      $("#cs").hide()
      $("#php").hide()
      $("#java").hide()
    }
    else if (interestInput === "back-end" && devInput === "software") {
      $("#cs").show()
      $(".nameInsert").text(nameInput)
      $(".emailInsert").text(emailInput)
      $("#java").hide()
      $("#php").hide()
      $("#ruby").hide()
    }
    else {
      alert("please fill in the question")
    }
  });
});
