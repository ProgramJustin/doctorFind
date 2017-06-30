var apiKey = require('./../.env').apiKey;


$(document).ready(function() {

  $('button').click(function() {
  var city = "Portland";




var medicalIssue = "headache";


  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue[0]+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey, function(response) {
    $('#showDoctor').text("Your Doctor" + " is " + response);
    console.log(response);

    alert("hi");


    });

  });

});
