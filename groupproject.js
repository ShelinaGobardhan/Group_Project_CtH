
var next = function() {
    
}

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

