google.load("feeds", "1");
function initialize() {
var feed = new google.feeds.Feed("http://tawara-ivf.blog.so-net.ne.jp/index.rdf");
feed.setNumEntries(4);
feed.load(function(result) {
if (!result.error) {
var container = document.getElementById("googlefeed");
for (var i = 0; i < result.feed.entries.length; i++) {
var entry = result.feed.entries[i];
var gazo = entry.content.match(/(http:){1}[\S_-]+((\.jpg)|(\.JPG))|(\.gif)|(\.png)/);
var photo = ("http://www.tawara-ivf.jp/media/top-img/600x600dmy.gif");
if(gazo){
container.innerHTML += '<div class="feedL"><a href="' + entry.link + '"><img src="' + gazo[0] +'"></a></div>';
container.innerHTML += '<div class="feedR"><p><a href="' + entry.link + '">' + entry.title + '</a><br>' + entry.contentSnippet.substr(0,45) + '...</p></div>';
container.innerHTML += '<div class="CB"></div>';
} else {
container.innerHTML += '<div class="feedL"><a href="' + entry.link + '"><img src="' + photo +'"></a></div>';
container.innerHTML += '<div class="feedR"><p><a href="' + entry.link + '">' + entry.title + '</a><br>' + entry.contentSnippet.substr(0,45) + '...</p></div>';
container.innerHTML += '<div class="CB"></div>';
}
var div = document.createElement("div");
container.appendChild(div);
}
}
});
}
google.setOnLoadCallback(initialize);

