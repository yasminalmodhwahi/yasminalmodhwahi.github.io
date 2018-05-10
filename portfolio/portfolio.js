
// var sliderImages = document.getElementById(".slide");
var arrowLeft = document.getElementById("arrowleft");
var arrowRight = document.getElementById("arrowright");
    // current = 0;

var slideIndex = 0;
/*this is for the slideshow automatic from https://www.w3schools.com/howto/howto_js_slideshow.asp*/

function showSlides(index) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    //console.log(slides);
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      if (i == index) {
        slides[i].style.display = "block";
        dots[i].classList.add("active");
      }
      else {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
      }
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

}

setInterval(function(){
  showSlides(slideIndex);
}, 5500); // Change image every 4.5 seconds

showSlides(slideIndex);

/*song autoplay*/
var song;

function preload(){
  song = loadSound("music.mp3");
}

function setup (){
  createCanvas(200,200);
  song.setVolume(0.5);
  song.loop();
}

function currentSlide(index){
  slideIndex = index-1;
  showSlides(slideIndex);
}




/*

//this is the code for the slideshow//
var slideIndex = 0;
showSlides();

function showSlides(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n>x.length){ index = 1};
    if (n<1) {index = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[index-1].style.display = "block";
    }
    autoslide();
    function autoSlide(){
      var i;
      var x = document.getElementsByClassName("mySlides")
      for(i=0;i<x.length;i++)
          {
            x[i].style.display = "none";
          }
      if (index > x.length){index = 1}
      x[index-1].style.display ="block";
      index++;
      setTimeout(autoSlide,2000);
    }

    /*slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//this code is for playing the music

function preload (){
  song = loadSound("music.mp3");
}

function setup(){
  createCanvas(200, 200);
  song.play();
}

//code below is for moving images right and Left, not the most diserable

//use code from here: https://codepen.io/bradtraversy/pen/boydaE for the image slidehow

//clear all images
function reset (){
  console.log ("hi")
  for(let i=0; i < sliderImages.length; i++){
    sliderImages[i].style.display = "none";
  }
}

//Initialise the sslider
function startSlide(){
  reset();
  sliderImages[0].style.display = "block";
}

//show previous
function slideLeft(){
  reset();
  sliderImages[current - 1].style.display= "block";
  current--;
}

//show Next
function slideRight(){
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//Left arrow click
arrowLeft.addEventListener("click", function(){
  if(current == 0){
    current = sliderImages.length;
  }
  slideLeft();
});

//Right arrow click
arrowRight.addEventListener("click", function(){
  if(current === sliderImages.length - 1){
    current = -1;
  }
  slideRight();
});

startSlide();

*/
