
$('#newsBTN').click(function () {
    getNews();
});

function getNews() {

    var news = [];
    var text = "";
    var arrLong = [];
    var arrShot = [];
    var arrMost = [];
    var arrword = [];

    var weGet = $.ajax({
        method: 'GET',
        cache: false,
        url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.pravda.com.ua%2Frss%2F', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        // data: {
        //     fname: name1,
        //     sname: name2 }, // Additional parameters here
        dataType: 'json',
        success: function(data) {
            //
            //Change data.source to data.something , where something is whichever part of the object you want returned.
            //To see the whole object you can output it to your browser console using:
            //console.log(data);

            //document.getElementById("result").innerHTML += items.title;
            data.items.forEach(function (item) {
                news.push(item.title);
                document.getElementById("result").innerHTML += "<p>" + item.title + "</p>";
                text += " " + item.title;
            });
            text = text.trim();
            var reg = /[а-яА-ЯіІєЄїЇ']+/ig;
            var long;
            var shot;
            text.match(reg).forEach(function (word) {
                if (long==undefined) {long = word};
                if (shot==undefined) {shot = word};

                if (long.length<word.length) {long = word};
                if (shot.length>word.length) {shot = word};

                arrword.push(word);
            });

            arr=arrword.sort(function (a,b) {
                if (a.length<b.length) return -1;
                if (a.length>b.length) return 1;
                return 0;
            });

            arr.forEach(function (item) {
                console.log(item);
            });
            //console.log(long+' '+shot);
        },
        error: function(err) { alert(err); },

    });

}

