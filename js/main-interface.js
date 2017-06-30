var apiKey = require('./../.env').apiKey;

var Finder = require('../js/backend.js').doctorModule;





$(document).ready(function() {


  $('form').submit(function(event) {
    event.preventDefault();

    var medicalIssue = $('#issue').val();
    var finded = new Finder();


    finded.find(medicalIssue, apiKey);

  });

});
