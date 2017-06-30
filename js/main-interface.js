var apiKey = require('./../.env').apiKey;


$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();

  var city = "Portland";

var medicalIssue = $('#issue').val();
alert(medicalIssue);

$.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey, function(response) {
  $('#showDoctor').append("Your Doctor" + " is " + response.data[0].practices[0].name);
  console.log(response);
  console.log(response.data[0].practices[0].name);





  });




  });

});
