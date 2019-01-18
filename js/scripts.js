$(document).ready(function() {
  $("#track").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var comment = $("#comment").val();
    var interests = $("#interests").val();

  });
});
