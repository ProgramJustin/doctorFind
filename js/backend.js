
function Finder(name) {
  this.name = name;
}

Finder.prototype.find = function(issues, key) {

  alert("test");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ issues + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=5&user_key=' + key, function(response) {

    for(var i = 0; i < 5; i++) {
    $('#showDoctor').append("<a>" + response.data[i].practices[0].name + '<img src="' + response.data[i].profile.image_url + '" alt=""/>' + "</a>");
    }

  });

};

exports.doctorModule = Finder;
