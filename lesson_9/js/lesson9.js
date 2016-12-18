// TASK 2 FREE API Weather


$('#weatherBTN').click(function () {
    doItWeather();
});

function doItWeather() {
    var lat = $('#lat').val();
    var lng = $('#lng').val();
    var outputWeather = $.ajax({
        method: 'GET',
        cache: false,
        url: 'https://simple-weather.p.mashape.com/weatherdata', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {
            lat: lat,
            lng: lng }, // Additional parameters here
        dataType: 'json',
        success: function(data) {
            //
            //Change data.source to data.something , where something is whichever part of the object you want returned.
            //To see the whole object you can output it to your browser console using:
            //console.log(data);
            document.getElementById("weatherResult").innerHTML = data.query.results.channel.lastBuildDate + "<br/>"
                + data.query.results.channel.description + "<br/>" + "<img src='"+data.query.results.channel.image.url+"'/>" + "<br/>"
                + "Today weather: temperature" + " " + data.query.results.channel.item.condition.temp + " " + "C" + ", " + data.query.results.channel.item.condition.text + "<br/>"
                + "Sunrise: " + data.query.results.channel.astronomy.sunrise + " / " + "Sunset: " + data.query.results.channel.astronomy.sunset;
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "4nTQcgjCA9mshfJmLrEJXYUd4cSGp1Fpo3djsnXO7uLmJnw36m"); // Enter here your Mashape key
        }
    });

}

// TASK 3 FREE API Love Calc

$('#loveBTN').click(function () {
    doItLove();
});

function doItLove() {
    var name1 = $('#name1').val();
    var name2 = $('#name2').val();
    var outputLove = $.ajax({
        method: 'GET',
        cache: false,
        url: 'https://love-calculator.p.mashape.com/getPercentage', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {
            fname: name1,
            sname: name2 }, // Additional parameters here
        dataType: 'json',
        success: function(data) {
            //
            //Change data.source to data.something , where something is whichever part of the object you want returned.
            //To see the whole object you can output it to your browser console using:
            //console.log(data);
            document.getElementById("loveResult").innerHTML = data.percentage + "%" + ' ' + data.result;
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "4nTQcgjCA9mshfJmLrEJXYUd4cSGp1Fpo3djsnXO7uLmJnw36m"); // Enter here your Mashape key
        }
    });

}



