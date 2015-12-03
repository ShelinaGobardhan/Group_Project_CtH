var myRequest = new XMLHttpRequest();
    var method = "GET";
    var url = "https://api.themoviedb.org/3/discover/movie?api_key=c035796a5a47aa7f45bf51d005852512&page=2";
           
        myRequest.open(method, url);
        myRequest.send();

console.log(document);


var dataParsed;
var i = 0;
var MovieArray = [];

myRequest.onreadystatechange = function () {
    console.log(myRequest.readyState);
    if (myRequest.readyState === 4 ) {
        console.log(myRequest.responseText);
        var data = myRequest.response;
        dataParsed = JSON.parse(data);
    }
       
      for (i = 0; i < dataParsed.results.length; i++){
            MovieArray.push(dataParsed.results[i].genre_ids[0]);
            console.log(dataParsed.results[i].genre_ids[0]);
            if (dataParsed.results[i].genre_ids[80]) {
                MovieArray.push(dataParsed.results[i].title)
            }
        }
};   

var myRequest = new XMLHttpRequest();
    var method = "GET";
    var query = "art-nouveau";  
    var url = "http://www.europeana.eu/api/v2/search.json?wskey=sMn3CfMgm&query=" + query + "&start=1&rows=24&profile=standard";
    myRequest.open(method, url);
    myRequest.send();

var PosterArray = [];

myRequest.onreadystatechange = function(){
    
    console.log(myRequest.readyState);  
    if (myRequest.readyState === 4) {
        console.log(myRequest.responseText);
        var data = myRequest.response;
        var dataParsed = JSON.parse(data);
        console.log(dataParsed);
        
        for (var i=0; i < dataParsed.items.length; i++){
        
            console.log(dataParsed.items[i].edmPreview[0]);
            PosterArray.push(dataParsed.items[i].edmPreview[0]);
            console.log(PosterArray);
        }
    } else {
        console.log(myRequest.readyState);
    }
}

function getCurrentImageIndex() {
    return PosterArray.indexOf(document.getElementById("poster1").src);
    }

function next() {
    nextImage = (getCurrentImageIndex() + 1) % PosterArray.length;
    document.getElementById("poster1").src = PosterArray[nextImage];
}

