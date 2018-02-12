$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var cityInput = $("input#city").val();
    var streetInput = $("input#street").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".city").text(cityInput);
    $(".street").text(streetInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
    event.preventDefault();
  });
});
