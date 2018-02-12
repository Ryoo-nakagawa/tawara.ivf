    $(function(){
        $.getJSON("https://query.yahooapis.com/v1/public/yql?callback=?", {
            q: "select * from rss(4) where url = 'http://tawara-ivf.blog.so-net.ne.jp/index.rdf'",
            format: "json"
        }, function(json) {
            var container = document.getElementById('feed');

            for (var i = 0; i < json.query.results.item.length; i++) {
                var entry = json.query.results.item[i];

                var dd = new Date(entry.date); // now
                var yearNum = dd.getYear();
                if (yearNum < 2000) yearNum += 1900;
                var m = dd.getMonth() + 1;
                if (m < 10) {
                    m = '0' + m;
                }
                var d = dd.getDate();
                if (d < 10) {
                    d = '0' + d;
                }
                var date = yearNum + '.' + m + '.' + d;
var imgsrc = entry.encoded.match(/src="(.*?)"/igm);
var photo = ("http://www.tawara-ivf.jp/media/top-img/600x600dmy.gif");
if(imgsrc){
container.innerHTML += '<div class="feedL"><a href="' + entry.link + '" target="_blank"><img ' + imgsrc + ' alt="" class="img-responsive" /></a></div>';
container.innerHTML += '<div class="feedR"><p><a href="' + entry.link + '" target="_blank">' + entry.title + '</a><br>' + entry.description.substring(0,40) + '...</p></div>';
container.innerHTML += '<div class="CB"></div>';
}
 else {
container.innerHTML += '<div class="feedL"><a href="' + entry.link + '" target="_blank"><img src="' + photo +'"></a></div>';
container.innerHTML += '<div class="feedR"><p><a href="' + entry.link + '" target="_blank">' + entry.title + '</a><br>' + entry.description.substr(0,40) + '...</p></div>';
container.innerHTML += '<div class="CB"></div>';
}
var div = document.createElement("div");
container.appendChild(div);
            }
        });
    });

