 var next = function() {

}
var genreselector = function(event) {
console.log("Genreding")

}
var myRequest = new XMLHttpRequest();
var method = "GET";
var url = "https://api.themoviedb.org/3/discover/movie…";

myRequest.open(method, url);
myRequest.send();

// console.log(document);

var dataParsed;
var i = 0;
var MovieArray = [];

myRequest.onreadystatechange = function () {
// console.log(myRequest.readyState);
if (myRequest.readyState === 4 ) {
// console.log(myRequest.responseText);
var data = myRequest.response;
dataParsed = JSON.parse(data);

for (i = 0; i < dataParsed.results.length; i++){
MovieArray.push(dataParsed.results[i].genre_ids[0]);

/*if (dataParsed.results[i].genre_ids[80]) {
MovieArray.push(dataParsed.results[i].title)
}*/
}

}

};

var j = 0;
var k = 0;

var selectmenu=document.getElementById("mymenu")
selectmenu.onchange=function(){ //run some code when "onchange" event fires
var chosenoption=this.options[this.selectedIndex] //this refers to "selectmenu"
if (chosenoption.value!="nothing"){
console.log("this is the chosen option", chosenoption.value)
//console.log(dataParsed.results[2].genre_ids[1])

var movietitles = [];

for (j = 0; j < dataParsed.results.length; j++){
for (k = 0; k < dataParsed.results[j].genre_ids.length; k++){
if (chosenoption.value==dataParsed.results[j].genre_ids[k]){
//console.log(dataParsed.results[j].original_title)
movietitles.push({moviename: dataParsed.results[j].original_title});

}
}
}
console.log(movietitles);
var source = $("‪#‎movies‬-tmp").html();
// console.log(dataParsed.results[3].title);
var template = Handlebars.compile(source);
// var context = {title: "My New Post", body: "This is my first post!"};
var html = template(movietitles);
$("‪#‎currentmovie‬").html(html);
console.log(dataParsed.results);
//window.open(chosenoption.value, "", "") //open target site (based on option's value attr) in new window
}
};

//console.log("its working")
