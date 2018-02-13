function playclip (){
  var audio = document.getElementById("music");
  audio.play();
}

var button = document.getElementById ("button");
button.onmouseover = playclip
//without paranthesis it delays the execution of the function until mouse hovers over button, otherwise if playclip () then it will play automatically as you load page
