//variable declaration
var body = document.getElementById("lolbody");
var audio = document.getElementById("music");
var button = document.getElementById ("image26");
var video = document.getElementById ("video");

//function declaration here I declare playclip
function playclip (){
  audio.play();
}

//event listener. Once I declare playclip I can call this function
button.onmouseover = function()
{
  playclip();
  console.log("hovering!!");
  body.style.backgroundColor = "white";
  body.style.color = "rgb(0, 0, 0)";
}

audio.volume = 0.3;

/* This is for loop. How to only play it if I've hovered over the image? if (button.onclick) {}
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.play();*/

//function declaration to pause clip
function pauseclip (){
  audio.pause();
}

//event listenerto pauseclip on mouseout and it knows its on the image bc button is declared as image26 in top
button.onmouseout = function(){
  pauseclip();
  console.log("hover out");
  body.style.backgroundColor = "rgb(0, 0, 0)";
  body.style.color = "white";
}

button.onclick = function ()
{
  video.style.display = "inline"; "autoplay";
  video.src += "&autoplay=1";

}


/**
var player;
function onYouTubePlayerAPIReady() {
player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onYouTubePlayerAPIReady() {
  var playimage1 = document.getElementById("image26");
    playimage1.addEventListener("click", function() {
      player.playVideo();
    });
}

var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);**/


/**$('.videoplay').on('click', function() {
    $("#image26")[0].src += "video";
});**/

/** if (button.onclick)
{
  video.style.display = "inline";
}**/
