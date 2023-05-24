document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.getElementById("form-submit-button");
  submitButton.addEventListener("click", function() {
    alert("Your form has been submitted!");
    console.log('hello"');
  });
});