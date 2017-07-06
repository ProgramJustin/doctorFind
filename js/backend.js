
function Finder() {
}

Finder.prototype.find = function(issues, key, sendToWindow) {

   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ issues + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=5&user_key=' + key).then(function(response) {

    sendToWindow(response);

  });


};

exports.doctorModule = Finder;
