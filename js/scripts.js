$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var cityInput = $("input#city").val();
    var streetInput = $("input#street").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".city").append(cityInput);
    $(".street").append(streetInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();
    event.preventDefault();
  });
});
