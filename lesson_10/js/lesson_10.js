
$('#newsBTN').click(function () {
    getNews();
});

function getNews() {
    return $.ajax({
        method: 'GET',
        cache: false,
        url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.pravda.com.ua%2Frss%2F',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            newsAnalysis(data);
        },
        error: function(err) {
            alert(err);
        },
    });
}

function newsAnalysis(data) {
    var news = [];
    var text = "";
    var arrword = [];
    var exceptions = ["а", "і", "в", "у", "на", "під", "та", "про", "по", "при", "все", "всі", "але", "вже", "від", "без", "поки", "коли", "який", "якої", "його",
        "ще", "які", "якщо", "їх", "через", "до", "не", "що", "й", "за", "ле", "то", "майже", "понад", "як", "так", "ні", "що", "щодо", "із", "зі",
        "з", "для"];

    if ($("#result .carousel.carousel-slider").length==0) $("#result").append("<div class='carousel carousel-slider'></div>");

    $('#start-carousel').removeClass('carousel ').addClass('hide');

    $("#result .carousel.carousel-slider").empty().removeClass("initialized");
    data.items.forEach(function (item) {
        news.push(item.title);
        //<a class="carousel-item" href="#one!"><img src="http://lorempixel.com/800/400/food/1"></a>
        //document.getElementById("result").innerHTML += "<p>" + item.title + "</p>";
        text += " " + item.title;
        $("#result .carousel.carousel-slider").append('<a class="carousel-item" >' + item.title + '</a>');
    });

    $('#result .carousel.carousel-slider').carousel({full_width: true});
    $('#result .carousel.carousel-slider').carousel();

    text = text.trim();
    var reg = /[а-яА-ЯіІєЄїЇ']+/ig;
    var long;
    var short;
    text.match(reg).forEach(function (word) {
        if (long == undefined) {long = word};
        if (short == undefined) {short = word};

        if (long.length < word.length) {long = word};
        if (short.length > word.length) {short = word};

        word = word.toLowerCase();
        if (exceptions.indexOf(word) != -1) return;

        word = word.toUpperCase();
        //if (arrword.indexOf(word) == -1) {arrword.push(word)};
        var index = -1;
        for (var i = 0; i < arrword.length; i++) {
            if (arrword[i].word == word) { index = i; break; }
        }

        if (index == -1) {
            arrword.push({"word":word,"count":1});
        } else {
            ++arrword[index].count;
        }
    });

    arr = arrword.sort(function (a, b) {
        if (a.word.length < b.word.length) return -1;
        if (a.word.length > b.word.length) return 1;
        return 0;
    });

    var itemsLong = "", itemsShort = "";
    for (var i = 0, n = arr.length - 1; i < 5; i++, n--) {
        itemsShort += arr[i].word + "; <br>";
        itemsLong += arr[n].word + "; <br>";
    }
    console.log(itemsShort+' / '+itemsLong);
    $("#shortW").empty();
    $("#shortW").append('<p>' + itemsShort + "</p>");
    $("#longW").empty();
    $("#longW").append('<p>' + itemsLong + "</p>");

    var arrMost = arrword.sort(function (a, b) {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    });

    var itemsMost = "";
    for (var i = 0; i < 5; i++) {
        itemsMost += arrMost[i].word + " (" + arrMost[i].count + "); <br>" ;
    }

    $(document).ready(function(){
        $('.collapsible').collapsible();
    });

    console.log(itemsMost);
    $("#mostW").empty();
    $("#mostW").append('<p>' + itemsMost + "</p>");
}

$(document).ready(function(){
    $('.carousel').carousel({full_width: false});
    $('.carousel').carousel();
    setInterval(function () {
       $('.carousel').carousel('next');
    },3000)
});


