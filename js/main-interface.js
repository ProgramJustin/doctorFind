var apiKey = require('./../.env').apiKey;
var Finder = require('../js/backend.js').doctorModule;

var sendDoctors = function(dataToSend) {

  console.log(dataToSend);

  for(var i = 0; i < 5; i++) {
    $('#showDoctor').append("<a>" + dataToSend.data[i].practices[0].name + '<img src="' + dataToSend.data[i].profile.image_url + '" alt=""/>' + "</a>");
  }

};

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#issue').val();
    var finded = new Finder();
  finded.find(medicalIssue, apiKey, sendDoctors);


  });

});
