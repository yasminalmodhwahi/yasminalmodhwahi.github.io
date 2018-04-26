function playclip (){
  var audio = document.getElementById("music");
  audio.play();
}

var button = document.getElementById ("image26");
button.onmouseover = playclip

function pauseclip (){
  var audio = document.getElementById("music");
  audio.pause();
}

var button = document.getElementById ("image26");
button.onmouseout = pauseclip
